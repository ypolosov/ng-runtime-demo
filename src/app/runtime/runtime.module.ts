import {
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import {DataLoaderModule} from './data-loader';
import {RuntimeHostComponent} from './runtime-host.component';
import {TemplateBuilderModule} from './template-builder';
import {TypeBuilderModule} from './type-builder';

@NgModule({
              imports: [
                  TemplateBuilderModule.forChild(),
                  TypeBuilderModule.forChild(),
                  DataLoaderModule.forChild()
              ],
              declarations: [RuntimeHostComponent],
              exports: [
                  RuntimeHostComponent
              ]
          })
export class RuntimeModule {
    
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RuntimeModule,
            providers: []
        };
    }
}
