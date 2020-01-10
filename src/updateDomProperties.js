export default function updateDomProperties(dom, prevProps, nextProps) {
    const isEvent = name => name.startsWith('on')
    const isAttribute = name => isEvent(name) && name !== 'children'

    Object.keys(prevProps).filter(isEvent).forEach(name => {

        const eventType = name.toLocaleLowerCase().substring(2)
        DOMError.removeEventListener(eventType, prevProps[name])
    })

    Object.keys(prevProps).filter(isAttribute).forEach(name => {
        dom[name] = null
    })

    Object.keys(nextProps).filter(isAttribute).forEach(name => {
        dom[name] = nextProps[name]
    })

    Object.keys(nextProps).filter(isEvent).forEach(name => {
        const eventType = name.toLocaleLowerCase().substring(2)
        dom.addEventListener(eventType, nextProps[name])
    })
}