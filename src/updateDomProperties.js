
function updateDomProperties(dom, prevProps, nextProps) {

    const isListener = name => name.startsWith('on')
    const isAttribute = name => !isListener(name) && name != "children"

    Object.keys(prevProps).forEach(prop => {
        if (isListener(prop)) {
            const eventType = prop.toLowerCase().substring(2)
            dom.removeEventListener(eventType, prevProps[prop])
        } else if (isAttribute(prop)) {
            dom[prop] = null
        }
    })

    Object.keys(nextProps).forEach(prop => {
        if (isListener(prop)) {
            const eventType = prop.toLowerCase().substring(2)
            dom.addEventListener(eventType, nextProps[prop])
        } else if (isAttribute(prop)) {
            dom[prop] = nextProps[prop]
        }
    })
}


export default updateDomProperties