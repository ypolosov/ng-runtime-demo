import {
    ErrorHandler,
    Injectable
} from '@angular/core';
import {CustomError} from './custom-error';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    
    constructor() {
    }
    
    handleError(error: Error | CustomError): void {
        
        const name = error.constructor.name;
        const message = error.message
            ? error.message
            : error.toString();
        const stack = error.stack;
        const customError: CustomError = (error as CustomError);
        const originError = customError.originError
            ? customError.originError
            : null;
        
        console.group(`Error Handler Service`);
        
        console.error(`NAME: ${name}`);
        console.error(`MESSAGE: ${message}`);
        if (originError) {
            console.error(`ORIGIN: ${originError}`);
        }
        console.error(`STACK: ${stack}`);
        console.groupEnd();
        
        throw error;
    }
    
}
