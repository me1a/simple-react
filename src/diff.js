import instanceCreate from './instance'
import updateDomProperties from './updateDomProperties'

function reconcile(parentDom, instance, element) {
    if (instance === null) {
        const newInstance = instanceCreate(element)
        parentDom.appendChild(newInstance.dom)
        return newInstance
    } else if (instance.element.type === element.type) {
        updateDomProperties(instance.dom, instance.element.props, element.props)
        instance.element = element
        return instance
    } else {
        const newInstance = instanceCreate(element)
        parentDom.replaceChild(newInstance.dom, instance.dom)
        return newInstance
    }
}
export default reconcile