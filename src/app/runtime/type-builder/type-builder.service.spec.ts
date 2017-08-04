import {ComponentFactory} from '@angular/core';
import {
    inject,
    TestBed
} from '@angular/core/testing';
import {TEST_TEMPLATE} from '../../test-data';
import {RuntimeData} from '../model';
import {BlankModule} from './blank.module';
import {RuntimeTypeBuilder} from './runtime-type-builder.service';

import {TypeBuilder} from './type-builder';

describe('RuntimeTypeBuilder',
         () => {
    
             let expectedResult: string = TEST_TEMPLATE;
    
             beforeEach(() => {
                 TestBed.configureTestingModule({
                                                    providers: [
                                                        {
                                                            provide: TypeBuilder,
                                                            useClass: RuntimeTypeBuilder
                                                        }
                                                    ]
                                                });
             });
    
             it('should create service',
                inject([TypeBuilder],
                       (service: TypeBuilder) => {
                           expect(service)
                               .toBeTruthy();
                       }));
    
             it('should create factory',
                inject([TypeBuilder],
                       (service: TypeBuilder) => {
                           let factory: ComponentFactory<RuntimeData> = service.createComponentFactorySync(TEST_TEMPLATE);
                           expect(factory)
                               .toBeTruthy();
                       }));
    
             it('should compile module',
                inject([TypeBuilder],
                       (service: TypeBuilder) => {
                           let factory: ComponentFactory<RuntimeData> = service.createComponentFactorySync(TEST_TEMPLATE);
        
                           expect(factory.componentType)
                               .toBe(BlankModule);
                       }));
         });
