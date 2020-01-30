/** @jsx createElement */

import createElement from './createElement'
import render from './render'

let i = 0


function createApp(i) {
    return <div title={i}>
        <h1 onClick={click}>app</h1>
        <h1 title={i}>app</h1>
    </div>
}

console.log(app)

function click() {
    i++
    console.log(i)
    render(createApp(i), document.querySelector('#app'))
}



render(createApp(i), document.querySelector('#app'))

// setInterval(() => {
//     i++

// }, 1000)