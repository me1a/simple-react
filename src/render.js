import diff from './diff'

let rootInstance = null

function render(vNode, parentDom) {
    const prevInstance = rootInstance
    const nextInstance = diff(parentDom, prevInstance, vNode)
    rootInstance = nextInstance
}

export default render