import instanceCreate from './instance'
import updateDomProperties from './updateDomProperties'

function diff(parentDom, instance, element) {
    if (instance === null) {
        const newInstance = instanceCreate(element)
        parentDom.appendChild(newInstance.dom)
        return newInstance
    } else if (instance.element.type === element.type) {
        updateDomProperties(instance.dom, instance.element.props, element.props)
        instance.childInstances = diffChildren(instance, element)
        instance.element = element
        return instance
    } else {
        const newInstance = instanceCreate(element)
        parentDom.replaceChild(newInstance.dom, instance.dom)
        return newInstance
    }
}

function diffChildren(instance, element) {
    const dom = instance.dom;
    const childInstances = instance.childInstances;
    const nextChildElements = element.props.children || [];
    const newChildInstances = []; // 新的孩子数组

    const count = Math.max(childInstances.length, nextChildElements.length); // 比较谁-大

    for (let i = 0; i < count; i++) {
        const childInstance = childInstances[i];
        const childElement = nextChildElements[i];

        // 2. 递归 - 上一层函数 reconcile
        const newChildInstance = diff(dom, childInstance, childElement);
        newChildInstances.push(newChildInstance);
    }
    return newChildInstances;
}


export default diff