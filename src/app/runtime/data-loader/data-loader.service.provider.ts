import {Provider} from '@angular/core';
import {DataLoader} from './data-loader.service';

export const DATA_LOADER_PROVIDER: Provider = {
    provide: DataLoader,
    useClass: DataLoader
};
