import {Provider} from '@angular/core';
import {HtmlTemplateBuilder} from './html-template-builder.service';
import {TemplateBuilder} from './template-builder';

export const TEMPLATE_BUILDER_PROVIDER: Provider = {
    provide: TemplateBuilder,
    useClass: HtmlTemplateBuilder
};
