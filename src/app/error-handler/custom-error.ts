export abstract class CustomError extends Error {
    
    constructor(
        m: string,
        type: Function,
        originError?: Error) {
        super(m);
        
        Object.setPrototypeOf(this,
                              type.prototype);
        
        this._originError = originError;
    }
    
    private _originError: Error;
    
    get originError() {
        return this._originError;
    }
}
