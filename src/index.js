/** @jsx createElement */
import createElement from './createElement'
import render from './render'

const app = (<div>
    <h1 style='height: 100px'>hello react</h1>
    <p>build you own react</p>
</div>)
console.log(app)

render(app, document.querySelector('#app'))