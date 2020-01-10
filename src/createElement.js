
const TEXT_ELEMENT = 'TEXT ELEMENT'


function createElement(type, config, ...children) {
    const props = Object.assign({}, config)

    const hasChildren = children.length > 0
    const rawChildren = hasChildren ? [].concat(...children) : []

    props.children = rawChildren.filter(item => item !== null && item !== false).map(item => item instanceof Object ? item : createTextElement(item))
    return { type, props }
}

function createTextElement(value) {
    return createElement(TEXT_ELEMENT, { nodeValue: value })
}


export default createElement