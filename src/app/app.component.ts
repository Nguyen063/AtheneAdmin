import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-admin';
  constructor() { }

  ngOnInit(): void {
  }
  RpMenu(){

   const element = document.querySelector('.content');
   element?.classList.toggle('active');
   const element2 = document.querySelector('.sidebar');
   element2?.classList.toggle('active');
   const element3 = document.querySelector('.btn-menu');
   element3?.classList.toggle('active');
  }
}
