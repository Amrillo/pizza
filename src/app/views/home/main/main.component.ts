import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Subscription,  map } from 'rxjs';
import { PopupComponent } from 'src/app/shared/components/popup/popup.component';
import { CartService } from 'src/app/shared/services/cart.service';
import * as bootstrap from "bootstrap" ;
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit , AfterViewInit {




  // private observable: Observable<number>
  private subscription: Subscription | null = null ;
  private subject: Subject<number>;




  constructor(public cartService: CartService,  private modalService : NgbModal ) {

    let count = 0;
      // this.observable = from([1,2,3,4,5]);
   this.subject = new Subject<number>();
   const interval =  setInterval(() => {
     this.subject.next(count++);
    }, 1000);
    const timeout1 =  setInterval(() => {
       this.subject.complete();
    }, 4000);

  }
    ngOnInit(): void {

      console.log(environment.production);

      this.subscription =  this.subject.subscribe(
        {
            next: (param:number)=> {
            console.log('subscriber 1: ', param);
          },
             error: (error: string) =>{
            console.log('Error !!!' + error);
           }
          }
        )
    }

    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
    }


    @ViewChild(PopupComponent)
    private popupComponent!: PopupComponent ;

    ngAfterViewInit(): void {
      // this.popupComponent.open();
    }
    test() {

      this.subject
      .pipe(
        map(number=>{
          return 'Число' + number
        })
      )
      .subscribe((param:string)=> {
        console.log('Observable 2 ' + param)
       });
    }
}
