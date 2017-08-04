import {
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import {ERROR_HANDLER_PROVIDER} from './error-handler.service.provider';

@NgModule({})
export class ErrorHandlerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ErrorHandlerModule,
            providers: [ERROR_HANDLER_PROVIDER]
        };
    }
}
