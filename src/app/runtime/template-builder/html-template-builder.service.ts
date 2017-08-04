import {Injectable} from '@angular/core';
import {TemplateBuilder} from './template-builder';

@Injectable()
export class HtmlTemplateBuilder extends TemplateBuilder {
    
    constructor() {
        super();
    }
    
    protected prepareSingleTag(
        tag: string,
        attributes: string): string {
        return `<${tag}${attributes}/>`;
    }
    
    protected preparePairTag(
        tag: string,
        attributes: string,
        content: string): string {
        return `<${tag}${attributes}>${content}</${tag}>`;
    }
    
    protected prepareAttribute(
        key: string,
        value: string): string {
        return `${key}="${value}"`;
    }
    
    protected prepareText(text: string): string {
        return `${text}`;
    }
}
