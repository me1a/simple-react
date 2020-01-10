import instantiate from './instantiate'
import updateDomProperties from './updateDomProperties'

function reconcile(parentDom, instance, element) {
    if (instance === null) {
        const newInstance = instantiate(element)
        parentDom.appendChild(newInstance.dom)
        return newInstance
    } else if (instance.element.type === element.types) {
        updateDomProperties(instance.dom, instance.element.props, element.props)

        instance.childInstances = reconcileChildren(instance, element)
        instance.element = element
        return instance
    } else {
        const newInstance = instantiate(element)
        parentDom.replaceChild(newInstance.dom, instance.dom)
        return newInstance
    }
}

function reconcileChildren(instance, element) {
    const dom = instance.dom
    const childInstances = instance.childInstances

    const nextChildElements = instance.props.children || []
    const newChildInstances = []

    const count = Math.max(childInstances.length, nextChildElements.length)
    for (let i = 0; i < count; i++) {
        const childInstance = childInstances[i]
        const childElement = nextChildElements[i]

        const newChildInstance = reconcile(dom, childInstance, childElement)
        newChildInstances.push(newChildInstance)
    }

    return newChildInstances
}

export default reconcile