// const element = {
//     type: "div",
//     props: {
//       id: "container",
//       children: [
//         { type: "input", props: { value: "foo", type: "text" } },
//         {
//           type: "a",
//           props: {
//             href: "/bar",
//             children: [{ type: "TEXT ELEMENT", props: { nodeValue: "bar" } }]
//           }
//         },
//         {
//           type: "span",
//           props: {
//             onClick: e => alert("Hi"),
//             children: [{ type: "TEXT ELEMENT", props: { nodeValue: "click me" } }]
//           }
//         }
//       ]
//     }
//   };

// const element = (
//     <div id="container">
//       <input value="foo" type="text" />
//       <a href="/bar">bar</a>
//       <span onClick={e => alert("Hi")}>click me</span>
//     </div>
//   );


const TEXT_ELEMENT = 'TEXT ELEMENT'


function createElement(type, config, ...args) {
    const props = Object.assign({}, config)

    const hasChildren = args.length > 0
    const rawChildren = hasChildren ? [].concat(...args) : []

    props.children = rawChildren.filter(item => item !== null && item !== false).map(item => item instanceof Object ? item : createTextElement(item))
    return { type, props }
}

function createTextElement(value) {
    return createElement(TEXT_ELEMENT, { nodeValue: value })
}