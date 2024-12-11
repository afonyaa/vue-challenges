import {h} from 'vue'

export const MyTree = (props, context) => {
    return h('div', renderChild(props.data))
}

let renderChild = (node) => {
    console.log(node)
    if (node.children.length === 0) {
        return h('ul', node.title)
    }
    return h('ul', [
        node.title, node.children.map(childNode => h('li', renderChild(childNode)))
    ])
}

MyTree.props = {
    data: {
        type: Object
    }
}