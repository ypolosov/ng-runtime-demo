# ng-runtime-demo

This Angular 2+ demo app shows how to create HTML template from JSON and then compile a component with it in runtime.

## Install

```
npm install -g @angular/cli

cd ./

npm install
```

## Development server

```
ng serve
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

```
ng build
```

or

```
ng build --env=prod
```

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--env=prod` flag for a production build.

## Running unit tests

```
ng test
```

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

```
ng e2e
```

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Generating a project documentation

```
npm run docs
```

Run `npm run docs` to generate project docs via [Compodoc](https://compodoc.github.io/website/).
The docs will be stored in the `documentation/` directory. You can serve it using any web server.

