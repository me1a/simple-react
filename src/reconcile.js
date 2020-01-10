import instantiate from './instantiate'

function reconcile(parentDom, instance, element) {
    if (instance === null) {
        const newInstance = instantiate(element)
        parentDom.appendChild(newInstance)
        return newInstance
    } else {
        const newInstance = instantiate(element)
        parentDom.replaceChild(newInstance.dom, instance.dom)
        return newInstance
    }
}

export default reconcile