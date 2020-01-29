import instanceCreate from './instance'

function reconcile(parentDom, instance, element) {
    if (instance === null) {
        const newInstance = instanceCreate(element)
        parentDom.appendChild(newInstance)
        return newInstance
    } else {
        const newInstance = instanceCreate(element)
        parentDom.replaceChild(newInstance.dom, instance.dom)
        return newInstance
    }
}