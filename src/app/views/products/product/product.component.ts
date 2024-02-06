import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';
import { PorductType } from 'src/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

   product: PorductType ;

   private subscription : Subscription | null =  null;

  constructor( private activatedRoute : ActivatedRoute,
    private productService : ProductService , private router : Router){
      this.product = {
          id : 0,
          image:'',
          title: '',
          description: '',
          date: ""
        }
    }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe((params: Params)=> {
          if(params['id']) {
        this.subscription =  this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data)=> {
              this.product = data;
            },
            error: (error)=> {
              this.router.navigate(['/'])
            }
          })
      };
    })
 }
    ngOnDestroy(): void {
      this.subscription?.unsubscribe();  //  отписаться от observable объекта
    }
}
