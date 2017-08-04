import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import {DataLoaderModule} from './data-loader';
import {RuntimeHostComponent} from './runtime-host.component';
import {TemplateBuilderModule} from './template-builder';
import {TypeBuilderModule} from './type-builder';

describe('RuntimeHostComponent',
         () => {
             let component: RuntimeHostComponent;
             let fixture: ComponentFixture<RuntimeHostComponent>;
    
             beforeEach(async(() => {
                 TestBed.configureTestingModule({
                                                    imports: [
                                                        TemplateBuilderModule.forChild(),
                                                        TypeBuilderModule.forChild(),
                                                        DataLoaderModule.forChild()
                                                    ],
                                                    declarations: [RuntimeHostComponent]
                                                })
                        .compileComponents();
             }));
    
             beforeEach(() => {
                 fixture = TestBed.createComponent(RuntimeHostComponent);
                 component = fixture.componentInstance;
                 fixture.detectChanges();
             });
    
             it('should create component',
                () => {
                    expect(component)
                        .toBeTruthy();
                });
         });
