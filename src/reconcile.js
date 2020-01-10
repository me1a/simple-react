import instantiate from './instantiate'
import updateDomProperties from './updateDomProperties'

function reconcile(parentDom, instance, element) {
    if (instance === null) {
        const newInstance = instantiate(element)
        parentDom.appendChild(newInstance.dom)
        return newInstance
    } else if (instance.element.type === element.types) {
        updateDomProperties(instance.dom, instance.element.props, element.props)
    } else {
        const newInstance = instantiate(element)
        parentDom.replaceChild(newInstance.dom, instance.dom)
        return newInstance
    }
}

export default reconcile