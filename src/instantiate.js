/**
 * 
 * @param {*} element 
 * const textElement = {
 *   type: "span",
    props: {
      children: [
        {
          type: "TEXT ELEMENT", // 1
          props: { nodeValue: "Foo" } // 2
        }
      ]
    }
  }
 */

function instantiate(element) {
  const { type, props } = element
  const isTextElement = type === 'TEXT ELEMENT'
  const dom = isTextElement ? document.createTextNode('') : document.createElement(type)

  const isListener = name => name.startsWith('on')
  Object.keys(props).filter(isListener).forEach(name => {
    const eventType = name.toLocaleLowerCase().substring(2)
    dom.addEventListener(eventType, props[name])
  })

  const isAttribute = name => !isListener(name) && name != "children";
  Object.keys(props).filter(isAttribute).forEach(name => {
    dom[name] = props[name]
  })

  const childElements = props.children || []
  const childInstances = childElements.map(instantiate)
  const childDoms = childInstances.map(childInstance => childInstance.dom)
  childDoms.forEach(childDom => dom.appendChild(childDom))

  const instance = {
    dom, element, childInstances
  }
  return instance
}
export default instantiate