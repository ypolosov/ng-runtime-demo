import {DomNode} from '../runtime/model';

export const TEST_DOM_NODE: DomNode = {
    'tag': 'div',
    'content': [
        {
            'tag': 'span',
            'attributes': {
                'style': 'color: red'
            },
            'content': [
                { 'text': 'Enter value:' }
            ]
        },
        {
            'tag': 'input',
            'attributes': {
                'type': 'text',
                'value': 'test',
                'style': 'color: green'
            }
        }
    ]
};
