import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TitleComponent } from './components/title/title.component';
import { CoolProjectDirective } from './directives/cool-project.directive';
import { IsChickenDirective } from './directives/is-chicken.directive';
import { WordUpperPipe } from './pipes/word-upper.pipe';
import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
import { ChickenProductsPipe } from './pipes/chicken-products.pipe';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolProjectDirective,
    IsChickenDirective,
    WordUpperPipe,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
   
  ],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolProjectDirective,
    IsChickenDirective,
    WordUpperPipe,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    PopupComponent
  ]
})
export class SharedModule { }
