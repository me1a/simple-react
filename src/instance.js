
function instantiate(element) {
    const { type, props } = element
    const isTextElement = type === 'TEXT ELEMENT'
    const dom = isTextElement ? document.createTextNode('') : document.createElement(type)

    const isListener = name => name.startsWith('on')
    const isAttribute = name => !isListener(name) && name !== 'children'

    Object.keys(props).forEach(prop => {
        if (isListener(prop)) {
            const eventType = prop.toLowerCase().substring(2)
            dom.addEventListener(eventType, props[prop])
        } else if (isAttribute(prop)) {
            dom[prop] = props[prop]
        }
    })

    const childElements = props.children || []
    const childInstances = childElements.map(child => instantiate)
    const childDoms = childInstances.map(child => child.dom)

    childDoms.forEach(child => dom.appendChild(child))

    const instance = {
        dom, element, childInstances
    }
    return instance
}

export default instantiate