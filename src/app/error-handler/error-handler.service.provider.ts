import {
    ErrorHandler,
    Provider
} from '@angular/core';
import {GlobalErrorHandler} from './global-error-handler.service';

export const ERROR_HANDLER_PROVIDER: Provider = {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
};
