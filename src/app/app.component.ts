import { Component } from '@angular/core';
import { Subject, interval, Observable, BehaviorSubject, AsyncSubject, ReplaySubject, onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subject-app';

  constructor() {}

  ngOnInit() {
     let subject$ = new Subject<number>();
      let observable$ = new Observable<number>();
      
      Observable.create(val=>{
        val.next(11);
      })
     subject$.next(11);
     subject$.subscribe(val=>{
       console.log(val);
     })

     observable$.subscribe(val=>{
      console.log(val);
    })
     
     
    
    
    
    subject$.next(12);
    subject$.next(13);
  //    let myObesrvable1$ = new Observable<number>();
  //    const myObesrvable$ = Observable.create(observer=>{
  //      observer.next(511);
  //    })

  //    subject$ = myObesrvable$.subscribe({
  //       next(val) {
  //         console.log(val);
  //       }
  //   })

  //   myObesrvable1$ = myObesrvable$.subscribe({
  //     next(val) {
  //       console.log(val);
  //     }
  // })
  //   console.log(myObesrvable1$);

     
  //   const behaviorSubject$ = new BehaviorSubject<number>(100);

  //   const asyncSubject$ = new AsyncSubject<number>();
  //   asyncSubject$.next(100);
  //   asyncSubject$.next(101);
  //   asyncSubject$.next(102);
  //   asyncSubject$.complete();

  //   asyncSubject$.subscribe(val=>{
  //     console.log(val);
  //   })

  //   const replaySubject$ = new ReplaySubject<string>();
    
  //   replaySubject$.subscribe(val=>{
  //     console.log("sub 1 :", val);
  //   })
  //   replaySubject$.next("uday");
    
  //   replaySubject$.subscribe(val=>{
  //     console.log("sub 2 :",val);
  //   })
  //   replaySubject$.next("shinde");
  //   replaySubject$.complete();
    
    //sub 1 : uday
    //sub 2 : uday
    //sub 1 : shinde
    //sub 2 : shinde


    // behaviorSubject$.subscribe(val=>{
    //   console.log('behaviorSubject 1 : ',val);
    // });

   
    

    // subject$.subscribe(val=>{
    //   console.log('Subject 1 : ',val);
    // });
    
    // subject$.next(100);

    // subject$.subscribe(val=>{
    //   console.log('Subject 2 : ',val);
    // });
    
    // subject$.next(200);
    

    // behaviorSubject$.subscribe(val=>{
    //   console.log('behaviorSubject 1 : ',val);
    // });
    
    // behaviorSubject$.next(1000); 

    // behaviorSubject$.subscribe(val=>{
    //   console.log('behaviorSubject 2 : ',val);
    // });
    
    // behaviorSubject$.next(2000);
    // behaviorSubject$.next(3000);

    // behaviorSubject 1 : 100
    // behaviorSubject 1 : 1000
    // behaviorSubject 2 : 1000
    // behaviorSubject 1 : 2000
    // behaviorSubject 2 : 2000
    
    
  }
}
