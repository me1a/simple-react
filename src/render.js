function render(vNode, parentDom) {

    const { type, props } = vNode
    const dom = document.createElement(type)


    const isListener = name => name.startsWith('on')
    const isAttribute = name => !isListener(name) && name != "children"
    Object.keys(props).forEach(prop => {
        if (isListener(prop)) {
            const eventType = prop.toLowerCase().substring(2)
            dom.addEventListener(eventType, props[prop])
        } else if (isAttribute) {
            dom[prop] = props[prop]
        } else {
            // 递归将 vNode 转化为真实dom
            const children = props.children || []
            children.forEach(child => render(child, dom))
        }
    })



    parentDom.appendChild(dom)
}