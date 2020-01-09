
// const textElement = {
//     type: "span",
//     props: {
//       children: [
//         {
//           type: "TEXT ELEMENT", // 1
//           props: { nodeValue: "Foo" } // 2
//         }
//       ]
//     }
//   };



function render(element, parentDom) {
    const { type, props } = element;


    const isTextElement = type === 'TEXT ELEMENT'
    const dom = isTextElement ? document.createTextNode('') : document.createElement(type)





    const isListener = name => name.startsWith('on')

    Object.keys(props).filter(isListener).forEach(item => {
        const eventType = item.toLowerCase().substring(2)
        dom.addEventListener(eventType, props.item)
    })

    const isAttribute = name => !isListener(name) && name !== 'children'

    Object.keys(props).filter(isAttribute).forEach(item => {
        dom[item] = props[item]
    })


    const childElements = props.children || []
    childElements.forEach(item => {
        render(item, dom)
    })
    parentDom.appendChild(dom)
}