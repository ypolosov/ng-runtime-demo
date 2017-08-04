import {CustomError} from '../../error-handler';

export class DataLoaderError extends CustomError {
    
    constructor(
        m: string,
        originError?: Error) {
        
        super(m,
              DataLoaderError,
              originError);
    }
}
