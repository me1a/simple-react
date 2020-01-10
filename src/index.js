/** @jsx createElement */
import createElement from './createElement'
import render from './render'

const arr = [
    { name: 'john', money: 9 },
    { name: 'lisa', money: 12 },
    { name: 'jack', money: 43 },
]

function App() {

    return <div>
        {
            arr.map(item => <div>
                <h4 >{item.name} has $ <span>{item.money}</span>. <button onClick={() => {
                    item.money = item.money + 1
                    render(App(), document.querySelector('#app'))
                }}>add</button></h4>
            </div>)
        }
    </div>
}


render(App(), document.querySelector('#app'))