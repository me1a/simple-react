import render from './render'


render({
    type: 'h1',
    props: {
        children: [
            { type: 'TEXT ELEMENT', props: { nodeValue: 'hello react!' } }
        ]
    }
}, document.querySelector('#app'))