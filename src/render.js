function render(vNode, parentDom) {

    const { type, props } = vNode
    const dom = document.createElement(type)
    // 递归将 vNode 转化为真实dom
    const children = props.children || []
    children.forEach(child => render(child, dom))
    parentDom.appendChild(dom)
}