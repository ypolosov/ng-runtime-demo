import { NgRuntimeDemoPage } from './app.po';

describe('ng-runtime-demo App', () => {
  let page: NgRuntimeDemoPage;

  beforeEach(() => {
    page = new NgRuntimeDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
