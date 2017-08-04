import {DomNode} from '../model';
import {TemplateBuilderError} from './template-builder-error';

export abstract class TemplateBuilder {
    
    constructor() {
    }
    
    prepareTemplate(entity: DomNode): string {
        if (!entity) {
            throw new TemplateBuilderError(`'entity' can't be ${entity}`);
        }
        return this.parseNode(entity);
    }
    
    protected abstract prepareSingleTag(
        tag: string,
        attributes: string): string;
    
    protected abstract preparePairTag(
        tag: string,
        attributes: string,
        content: string): string;
    
    protected abstract prepareAttribute(
        key: string,
        value: string): string;
    
    protected abstract prepareText(text: string): string;
    
    private _prepareAttribute(
        key: string,
        value: string): string {
        try {
            return this.prepareAttribute(key,
                                         value);
        } catch(error) {
            throw new TemplateBuilderError(`Can't prepare attribute`,
                                           error);
        }
    }
    
    private _prepareText(text: string): string {
        try {
            return this.prepareText(text);
        } catch(error) {
            throw new TemplateBuilderError(`Can't prepare text`,
                                           error);
        }
    }
    
    private _preparePairTag(
        tag: string,
        attributes: string,
        content: string): string {
        try {
            return this.preparePairTag(tag,
                                       attributes,
                                       content);
        } catch(error) {
            throw new TemplateBuilderError(`Can't prepare pair tag`,
                                           error);
        }
    }
    
    private _prepareSingleTag(
        tag: string,
        attributes: string): string {
        try {
            return this.prepareSingleTag(tag,
                                         attributes);
        } catch(error) {
            throw new TemplateBuilderError(`Can't prepare single tag`,
                                           error);
        }
    }
    
    private parseNode(entity: DomNode): string {
        if (!((entity.tag || entity.text) && !(entity.tag && entity.text))) {
            throw new TemplateBuilderError('There must be only either \'tag\' or \'text\' field!');
        }
        
        let template;
        
        if (entity.tag) {
            template = this.parseTag(entity);
        } else if (entity.text) {
            template = this._prepareText(entity.text);
        }
        
        return template;
    }
    
    private parseTag(entity: DomNode): string {
        
        let template;
        
        if (this.isPairTag(entity)) {
            template = this._preparePairTag(entity.tag,
                                            this.parseAttributes(entity),
                                            this.parseContent(entity));
        } else {
            template = this._prepareSingleTag(entity.tag,
                                              this.parseAttributes(entity));
        }
        
        return template;
    }
    
    private isPairTag(entity: DomNode): boolean {
        const tag: string = entity.tag;
        const element: HTMLElement = document.createElement(tag);
        const arr: string[] = element.outerHTML.split(tag);
        if ((arr.length == 2) && (entity.content)) {
            throw new TemplateBuilderError('Single tag can\'t have \'content\'');
        }
        return (arr.length > 2);
    }
    
    private parseContent(entity: DomNode): string {
        if (entity.content && entity.text) {
            throw new TemplateBuilderError('There must be only either \'content\' or \'text\' field!');
        }
        
        let parsedNodes = [];
        if (entity.content) {
            entity.content.forEach((subNode: DomNode) => {
                parsedNodes.push(this.parseNode(subNode));
            });
        } else if (entity.text) {
            parsedNodes.push(this._prepareText(entity.text));
        }
        
        return parsedNodes.join(``);
    }
    
    private parseAttributes(entity: DomNode): string {
        
        let template = [];
        if (entity.attributes) {
            template.push(``);
            let keys: string[] = Object.keys(entity.attributes);
            keys.forEach((key: string) => {
                let value: string = entity.attributes[key];
                let parsedAttr: string = `${this._prepareAttribute(key,
                                                                   value)}`;
                template.push(parsedAttr);
            });
        }
        
        return template.join(` `);
    }
}
