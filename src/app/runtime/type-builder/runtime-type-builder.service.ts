import {
    Compiler,
    Injectable
} from '@angular/core';
import {BlankComponent} from './blank.component';
import {BlankModule} from './blank.module';
import {TypeBuilder} from './type-builder';

@Injectable()
export class RuntimeTypeBuilder extends TypeBuilder {
    
    constructor(protected compiler: Compiler) {
        super(compiler,
              BlankModule,
              BlankComponent);
    }
}
