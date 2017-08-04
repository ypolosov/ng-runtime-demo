import {
    AfterViewInit,
    Component,
    ComponentFactory,
    ComponentRef,
    Input,
    OnDestroy,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DataLoader} from './data-loader';
import {
    DomNode,
    RuntimeData
} from './model';
import {RuntimeError} from './runtime-error';
import {TemplateBuilder} from './template-builder';
import {TypeBuilder} from './type-builder';

@Component({
               selector: 'runtime-host',
               template: `
                   <ng-container #runtimeContentPlaceHolder></ng-container>`
           })
export class RuntimeHostComponent implements AfterViewInit,
                                             OnDestroy {
    
    @Input()
    dataUrl: string;
    
    @ViewChild('runtimeContentPlaceHolder',
               { read: ViewContainerRef })
    private viewContainerRef: ViewContainerRef;
    
    private runtimeComponentRef: ComponentRef<RuntimeData>;
    
    private sub: Subscription;
    
    constructor(
        private typeBuilder: TypeBuilder,
        private templateBuilder: TemplateBuilder,
        private dataLoader: DataLoader) {
    }
    
    ngAfterViewInit(): void {
        this.sub = this.dataLoader.requestDomNode(this.dataUrl)
                       .subscribe((domNode: DomNode) => {
                           this.refreshContent(domNode);
                       });
    }
    
    ngOnDestroy(): void {
        if (this.runtimeComponentRef) {
            this.runtimeComponentRef.destroy();
            this.runtimeComponentRef = null;
        }
        
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    
    private refreshContent(domNode: DomNode): void {
        
        const template: string = this.prepareTemplate(domNode);
        
        const factory: ComponentFactory<RuntimeData> = this.getFactoryByTemplate(template);
        
        this.createComponentWithData(factory,
                                     domNode);
    }
    
    private getFactoryByTemplate(template: string): ComponentFactory<RuntimeData> {
        try {
            return this.typeBuilder.createComponentFactorySync(template);
        } catch(error) {
            throw new RuntimeError(`Invalid html template: ${template}`,
                                   error);
        }
    }
    
    private prepareTemplate(domNode: DomNode): string {
        try {
            return this.templateBuilder.prepareTemplate(domNode);
        } catch(error) {
            throw new RuntimeError(`Invalid domNode: ${JSON.stringify(domNode,
                                                                      null,
                                                                      '  ')}`,
                                   error);
        }
    }
    
    private createComponentWithData(
        factory: ComponentFactory<RuntimeData>,
        domNode: DomNode): void {
        try {
            this.runtimeComponentRef = this.viewContainerRef.createComponent(factory);
            
            const component: RuntimeData = this.runtimeComponentRef.instance;
            
            component.domNode = domNode;
            
        } catch(error) {
            throw new RuntimeError(`Can't create component`,
                                   error);
        }
    }
}



