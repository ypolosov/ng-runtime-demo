import {Provider} from '@angular/core';
import {RuntimeTypeBuilder} from './runtime-type-builder.service';
import {TypeBuilder} from './type-builder';

export const TYPE_BUILDER_PROVIDER: Provider = {
    provide: TypeBuilder,
    useClass: RuntimeTypeBuilder
};
