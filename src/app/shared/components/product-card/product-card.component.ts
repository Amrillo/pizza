import { Component, ElementRef, EventEmitter, Input , Output,  ViewChild} from '@angular/core';
import { PorductType } from '../../../../types/product.type';
import { TitleComponent } from '../title/title.component';
import { CartProductService } from '../../services/cart-product.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers:  [CartProductService]
  // encapsulation: ViewEncapsulation.None  // styles will become global
})

export class ProductCardComponent {

    @Input() product: PorductType;
      // @Input() product: PorductType = {} as PorductType;  // если объект состоит из много свойств лайфхак

    // @Input() product!: PorductType;
    @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild(TitleComponent)
    private titleComponent!: TitleComponent;

    @ViewChild('elem')
    private elem!: ElementRef;  //  it;s accesible only in

    constructor(public cartProductsService: CartProductService) {
        this.product = {
          id : 0,
          image:'',
          title: '',
          description: '',
          date: ""
        }
    }
    // addProductCart() {
    //   this.cartProductsService.count++
    //   this.addToCartEvent.emit(this.titleComponent.title);
    // }
}
