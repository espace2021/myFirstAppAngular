import { Component } from '@angular/core';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-exemple-observable',
  templateUrl: './exemple-observable.component.html',
  styleUrls: ['./exemple-observable.component.css']
})
export class ExempleObservableComponent {
  progress: Array<string> = [];

ngOnInit() {
    this.loadData().subscribe({
      next:(x:any) => this.progress.push(x),
      error: (error) => this.progress.push(error),
      complete: () =>  this.progress.push('>>>>> Complete')
    });
  }

  loadData() {
      return new Observable(observer => {
      observer.next('Observer work 1');
      observer.next('Observer work 2');
      setTimeout(() => {
        observer.next('Observer work 3');
        observer.complete();
      }, 5000);
    });
  }
}
