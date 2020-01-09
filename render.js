function render(element, parentDom) {
    const { type, props } = element;
    const dom = document.createElement(type)
    const childElements = props.children || []
    childElements.forEach(item => {
        render(item, dom)
    })
    parentDom.appendChild(dom)
}