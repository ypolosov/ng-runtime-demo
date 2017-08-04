import {
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import {TYPE_BUILDER_PROVIDER} from './type-builder.service.provider';

@NgModule({
              providers: []
          })
export class TypeBuilderModule {
    static forChild(): ModuleWithProviders {
        return {
            ngModule: TypeBuilderModule,
            providers: [TYPE_BUILDER_PROVIDER]
        };
    }
}
