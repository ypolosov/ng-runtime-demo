import {
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import {TEMPLATE_BUILDER_PROVIDER} from './template-builder.service.provider';

@NgModule({
              providers: []
          })
export class TemplateBuilderModule {
    static forChild(): ModuleWithProviders {
        return {
            ngModule: TemplateBuilderModule,
            providers: [TEMPLATE_BUILDER_PROVIDER]
        };
    }
}
