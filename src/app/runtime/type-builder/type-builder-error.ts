import {CustomError} from '../../error-handler';

export class TypeBuilderError extends CustomError {
    
    constructor(
        m: string,
        originError?: Error) {
        
        super(m,
              TypeBuilderError,
              originError);
    }
}
