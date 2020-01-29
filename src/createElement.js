const TEXT_ELEMENT = 'TEXT ELEMENT'

function createElement(type, config, ...args) {
    const props = Object.assign({}, config)
    const hasChildren = args.length > 0
    const children = hasChildren ? [].concat(...args) : []
    props.children = children
        .filter(item => item !== null && item !== false)
        .map(child => {
            child instanceof Object ? child : createTextElement(child)
        })
    return { type, props }
}

function createTextElement(value) {
    return createElement(TEXT_ELEMENT, { nodeValue: value })
}

export default createElement