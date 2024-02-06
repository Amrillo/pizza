import { Pipe, PipeTransform } from '@angular/core';
import { PorductType } from '../../../types/product.type';

@Pipe({
  name: 'chickenProducts'
})
export class ChickenProductsPipe implements PipeTransform {

  transform(products: PorductType[]): PorductType[] {
    return products.filter(item=> item.title.toLowerCase().includes('кур'))
  }

}
