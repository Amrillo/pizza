import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private productService : ProductService ) { }
  formValues = {
    productTitle : '',
    adress: '',
    phone: '',
  }

  private  subscription : Subscription | null =  null;
  private subscriptionOrder : Subscription | null = null ;

  ngOnInit(): void {

   this.subscription =  this.activatedRoute.queryParams.subscribe((params)=> {
      if(params['product']) {
        this.formValues.productTitle = params['product'];
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();  //  отписаться от observable объекта
    this.subscriptionOrder?.unsubscribe
  }

  createOrder() {
    if(!this.formValues.productTitle) {
      alert('Fill in the pizza');
      return ;
    }
    if(!this.formValues.adress) {
      alert('Fill in the adress');
      return ;
    }
    if(!this.formValues.phone) {
      alert('Fill in the phone');
      return ;
    }

    // ajax
   this.subscriptionOrder =  this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.adress,
      phone: this.formValues.phone
    })
      .subscribe(response=> {
        if(response.success && !response.message) {
          alert('Thank you for order');

          this.formValues = {
            productTitle : '',
            adress: '',
            phone: '',
         }
        } else {
          alert('Ошибка!');
        }
      })
   }
}
