/** @jsx createElement */

import createElement from './createElement'
import render from './render'


const app = <div>
    <h1>app</h1>
    <h1>app</h1>
</div>

console.log(app)


render(app, document.querySelector('#app'))

