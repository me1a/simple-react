/** @jsx createElement */

import createElement from './createElement'
import render from './render'

let i = 0

let app = <div>
    <h1 onClick={click}>app</h1>
    <h1>app{i}</h1>
</div>

function click() {
    i++
    console.log(i)
    app = <div title={i}>
        <h1 onClick={click}>app</h1>
        <h1 title={i}>app</h1>
    </div>
    render(app, document.querySelector('#app'))
}

console.log(app)


render(app, document.querySelector('#app'))

// setInterval(() => {
//     i++

// }, 1000)