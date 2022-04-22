import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-oberservable-example',
  templateUrl: './oberservable-example.component.html',
  styleUrls: ['./oberservable-example.component.css']
})
export class OberservableExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sampleObservable$ = new Observable(observer => { // Uses next, error, complete
      observer.next({
        name: 'Erick Garcia'
      });

      observer.complete();
    });

    const samplePromise = new Promise((resolve, error) => {
      resolve({
        name: 'Gabriel Garcia'
      });
    });

    sampleObservable$.subscribe(data => {
      console.log(data, 'Observable');
    });

    samplePromise.then(data => {
      console.log(data, 'Promise');
    });

    console.log(sampleObservable$);
  }
}
