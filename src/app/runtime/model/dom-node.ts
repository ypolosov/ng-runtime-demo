import {Attributes} from './attributes';
import {Tag} from './tag';

export interface DomNode {
    tag?: Tag;
    
    attributes?: Attributes;
    
    content?: DomNode[];
    
    text?: string;
}
