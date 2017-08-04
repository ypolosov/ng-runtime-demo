import {Component} from '@angular/core';

@Component({
               selector: 'app-root',
               template: `
                   <runtime-host [dataUrl]="dataUrl"></runtime-host>`
           })
export class AppComponent {
    dataUrl = 'assets/data.json';
}
