import updateDomProperties from './updateDomProperties'

function instantiate(element) {
    const { type, props } = element
    const isTextElement = type === 'TEXT ELEMENT'
    const dom = isTextElement ? document.createTextNode('') : document.createElement(type)
    updateDomProperties(dom, {}, props)

    const childElements = props.children || []
    const childInstances = childElements.map(child => instantiate(child))
    const childDoms = childInstances.map(child => child.dom)

    childDoms.forEach(child => dom.appendChild(child))

    const instance = {
        dom, element, childInstances
    }
    return instance
}

export default instantiate