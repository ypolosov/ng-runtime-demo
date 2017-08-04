import {
    Compiler,
    Component,
    ComponentFactory,
    ModuleWithComponentFactories,
    NgModule,
    Type,
    TypeDecorator
} from '@angular/core';
import {RuntimeData} from '../model';
import {TypeBuilderError} from './type-builder-error';

export abstract class TypeBuilder {
    
    protected constructor(
        protected compiler: Compiler,
        protected moduleType: Type<NgModule>,
        protected componentType: Type<Component>) {
    }
    
    createComponentFactorySync(template: string): ComponentFactory<RuntimeData> {
        
        const annotatedComponent: Type<Component> = this.annotateComponentByTemplate(this.moduleType,
                                                                                     template);
        const annotatedModule: Type<NgModule> = this.annotateModuleByComponent(this.componentType,
                                                                               annotatedComponent);
        
        return this.getFactory(annotatedModule,
                               annotatedComponent);
    }
    
    private getFactory(
        annotatedModule: Type<NgModule>,
        annotatedComponent: Type<Component>) {
        
        let factory: ComponentFactory<RuntimeData>;
        try {
            const moduleWithComponentFactories: ModuleWithComponentFactories<any> = this.compiler.compileModuleAndAllComponentsSync(annotatedModule);
            
            factory = moduleWithComponentFactories.componentFactories.find(
                f => f.componentType === annotatedComponent);
        } catch(error) {
            throw new TypeBuilderError(`Can't compile module`,
                                       error);
        }
        return factory;
    }
    
    private annotateComponentByTemplate(
        componentType: Type<Component>,
        template: string): Type<Component> {
        
        const metadata = {
            selector: 'runtime-component',
            template: template,
            inputs: Object.keys(componentType)
        };
        try {
            const typeDecorator: TypeDecorator = Component(metadata);
            typeDecorator(componentType);
        } catch(error) {
            throw new TypeBuilderError(`Can't annotate component`,
                                       error);
        }
        
        return componentType;
    }
    
    private annotateModuleByComponent(
        moduleType: Type<NgModule>,
        componentType: Type<Component>): Type<NgModule> {
        
        const metadata = {
            declarations: [
                componentType
            ]
        };
        try {
            const typeDecorator: TypeDecorator = NgModule(metadata);
            typeDecorator(moduleType);
        } catch(error) {
            throw new TypeBuilderError(`Can't annotate module`,
                                       error);
        }
        
        return moduleType;
    }
}
