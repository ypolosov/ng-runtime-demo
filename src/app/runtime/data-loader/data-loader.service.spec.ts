import {
    fakeAsync,
    inject,
    TestBed,
    tick
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    ConnectionBackend,
    Http,
    Response,
    ResponseOptions
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import {Observable} from 'rxjs/Observable';
import {DomNode} from '../model';
import {DataLoader} from './data-loader.service';

describe('DataLoader',
         () => {
             const domNode: DomNode = {
                 'tag': 'div',
                 'content': [
                     {
                         'tag': 'span',
                         'attributes': {
                             'style': 'color: red'
                         },
                         'content': [
                             {
                                 'text': 'Enter value:'
                             }
                         ]
                     },
                     {
                         'tag': 'input',
                         'attributes': {
                             'type': 'text',
                             'value': 'test',
                             'style': 'color: green'
                         }
                     }
                 ]
             };
             beforeEach(() => {
                 TestBed.configureTestingModule({
                                                    providers: [
                                                        BaseRequestOptions,
                                                        MockBackend,
                                                        DataLoader,
                                                        {
                                                            provide: Http,
                                                            useFactory: (
                                                                backend: ConnectionBackend,
                                                                defaultOptions: BaseRequestOptions) => {
                                                                return new Http(backend,
                                                                                defaultOptions);
                                                            },
                                                            deps: [
                                                                MockBackend,
                                                                BaseRequestOptions
                                                            ]
                                                        }
                                                    ]
                                                });
             });
    
             function expectURL(
                 backend: MockBackend,
                 url: string) {
                 (backend.connections as Observable<MockConnection>).subscribe((c: MockConnection) => {
                     expect(c.request.url)
                         .toBe(url);
                     const response = new ResponseOptions({ body: domNode });
                     c.mockRespond(new Response(response));
                 });
             }
    
             it('should get correct dom node',
                inject([
                           DataLoader,
                           MockBackend
                       ],
                       fakeAsync((
                                     svc: DataLoader,
                                     backend) => {
                           let res;
                           expectURL(backend,
                                     'assets/data.json');
                           svc.requestDomNode('assets/data.json')
                              .subscribe((_res) => {
                                  res = _res;
                              });
                           tick();
                           expect(res)
                               .toBe(domNode);
                       }))
             );
         });
