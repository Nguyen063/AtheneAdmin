import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RpMenu(){
    const elemen2t = document.querySelector('.sidebar');
   elemen2t?.classList.toggle('active');
   const element = document.querySelector('.home');
   element?.classList.toggle('active');
  }
}

