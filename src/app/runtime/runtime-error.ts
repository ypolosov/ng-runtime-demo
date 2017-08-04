import {CustomError} from '../error-handler';

export class RuntimeError extends CustomError {
    constructor(
        m: string,
        originError?: Error) {
        
        super(m,
              RuntimeError,
              originError);
    }
}
