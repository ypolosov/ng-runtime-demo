import {
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import {HttpModule} from '@angular/http';
import {DATA_LOADER_PROVIDER} from './data-loader.service.provider';

@NgModule({
              imports: [
                  HttpModule
              ]
          })
export class DataLoaderModule {
    static forChild(): ModuleWithProviders {
        return {
            ngModule: DataLoaderModule,
            providers: [DATA_LOADER_PROVIDER]
        };
    }
}
