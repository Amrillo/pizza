import { PorductType } from '../../../types/product.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({  
  providedIn: 'root'
}
)

export class ProductService {

  private products : PorductType[] =  [];

  constructor(private http: HttpClient) { }


  getProducts(): Observable<PorductType[]> {

    return this.http.get<PorductType[]>(environment.apiURL +  'pizzas');

  }

  getProduct(id: number): Observable<PorductType> {
    // ajax
    return this.http.get<PorductType>(environment.apiURL + `pizzas?id=${id}`);
  }

  createOrder(data: {product: string, address: string, phone: string}) {
    return this.http.post<{success: boolean, message?: string}>(environment.apiURL + `order-pizza`, data);
  }

}
