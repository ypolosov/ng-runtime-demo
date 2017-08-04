import {CustomError} from '../../error-handler';

export class TemplateBuilderError extends CustomError {
    
    constructor(
        m: string,
        originError?: Error) {
        
        super(m,
              TemplateBuilderError,
              originError);
    }
}
