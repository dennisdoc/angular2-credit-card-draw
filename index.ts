import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardDraw} from "./src/card.component";

export * from './src/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardDraw
  ],
  exports: [
    CardDraw
  ]
})
export class CardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CardModule
    };
  }
}
