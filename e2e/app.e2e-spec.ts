import {NgRuntimeDemoPage} from './app.po';

describe('NgRuntimeDemo App',
         () => {
             let page: NgRuntimeDemoPage;
    
             beforeEach(() => {
                 page = new NgRuntimeDemoPage();
             });
    
             it('should display "Enter value:" as div text',
                () => {
                    page.navigateTo();
                    expect(page.getDivText())
                        .toEqual('Enter value:');
                });
    
             it('should display "test" as input value',
                () => {
                    page.navigateTo();
                    expect(page.getInputValue())
                        .toEqual('test');
                });
         });
