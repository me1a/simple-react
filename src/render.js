import reconcile from './reconcile'
let rootInstance = null
function render(element, container) {
    const prevInstance = rootInstance
    const nextInstance = reconcile(container, prevInstance, element)
    rootInstance = nextInstance
}

export default render