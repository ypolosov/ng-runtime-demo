import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ErrorHandlerModule} from './error-handler';
import {RuntimeModule} from './runtime';

describe('AppComponent',
         () => {
             let component: AppComponent;
             let fixture: ComponentFixture<AppComponent>;
    
             beforeEach(async(() => {
                 TestBed.configureTestingModule({
                                                    imports: [
                                                        BrowserModule,
                                                        RuntimeModule.forRoot(),
                                                        ErrorHandlerModule.forRoot()
                                                    ],
                                                    declarations: [AppComponent]
                                                })
                        .compileComponents();
             }));
    
             beforeEach(() => {
                 fixture = TestBed.createComponent(AppComponent);
                 component = fixture.componentInstance;
                 fixture.detectChanges();
             });
    
             it('should create component',
                () => {
                    expect(component)
                        .toBeTruthy();
                });
    
             it('should render "runtime-host" tag',
                async(() => {
                    const compiled = fixture.debugElement.nativeElement;
                    const runtimeHostNode: Node = compiled.querySelector('runtime-host');
                    expect(runtimeHostNode)
                        .toBeTruthy();
                }));
    
             it('should have as dataUrl "assets/data.json"',
                async(() => {
                    const app = fixture.debugElement.componentInstance;
                    expect(app.dataUrl)
                        .toEqual('assets/data.json');
                }));
         });
