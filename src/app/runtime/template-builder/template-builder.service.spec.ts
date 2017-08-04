import {
    inject,
    TestBed
} from '@angular/core/testing';
import {
    TEST_DOM_NODE,
    TEST_TEMPLATE
} from '../../test-data';

import {HtmlTemplateBuilder} from './html-template-builder.service';
import {TemplateBuilder} from './template-builder';

describe('HtmlTemplateBuilder',
         () => {
    
             let expectedResult: string = TEST_TEMPLATE;
    
             beforeEach(() => {
                 TestBed.configureTestingModule({
                                                    providers: [
                                                        {
                                                            provide: TemplateBuilder,
                                                            useClass: HtmlTemplateBuilder
                                                        }
                                                    ]
                                                });
             });
    
             it('should create service',
                inject([TemplateBuilder],
                       (service: TemplateBuilder) => {
                           expect(service)
                               .toBeTruthy();
                       }));
    
             it('should return something',
                inject([TemplateBuilder],
                       (service: TemplateBuilder) => {
                           let parsedHtml: string = service.prepareTemplate(TEST_DOM_NODE);
                           console.log(parsedHtml);
                           expect(parsedHtml)
                               .toBeTruthy();
                       }));
    
             it('should return expected HTML',
                inject([TemplateBuilder],
                       (service: TemplateBuilder) => {
                           let parsedHtml: string = service.prepareTemplate(TEST_DOM_NODE);
                           console.log(parsedHtml);
                           expect(parsedHtml)
                               .toEqual(expectedResult);
                       }));
         });
