import {h} from 'vue'

export const Mybutton = (props, context) => {
    return h('button', 
        {
            ...context.attrs, onClick: () => context.emit('custom-click')
        }, context.slots
    )
}