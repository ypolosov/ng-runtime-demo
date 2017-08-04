import {
    browser,
    by,
    element
} from 'protractor';

export class NgRuntimeDemoPage {
    navigateTo() {
        return browser.get('/');
    }
    
    getDivText() {
        return element(by.css('app-root runtime-host runtime-component div span'))
            .getText();
    }
    
    getInputValue() {
        return element(by.css('app-root runtime-host runtime-component div input'))
            .getAttribute('value');
    }
}
