# angular2-credit-card-draw

## Installation

To install this library, run:

```bash
$ npm install angular2-credit-card-draw --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular2-credit-card-draw
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { CardDraw } from 'angular2-credit-card-draw';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```typescript
atributes:{
  background:'blue',
  name:'Emma Watson',
  number:'1234 1234 1234 1234',
  ccv:'999',
  expiration:'99/99',
  height:450px,
  width:450px
}
```
```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<card-draw [width]="atributes.width" [height]="atributes.height" [ccv]="atributes.ccv" [background]="atributes.background" [expiration]="atributes.expiration" [name]="atributes.name" [number]="atributes.number" >
</card-draw>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Dennis Oliveira Cremasco](dennisdoc@hotmail.com)
