import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { webSocket } from "rxjs/webSocket";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  subject = webSocket('wss://me-test-ffefad8830b5.herokuapp.com/:443')

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  phone(){
    this.subject.subscribe()
    this.subject.next({"slider1":19,"slider2":19})
    this.subject.complete
    this.router.navigate(['end'])
  }
  other(){
    this.subject.subscribe()
    this.subject.next({"slider1":25,"slider2":0})
    this.subject.complete
    this.router.navigate(['black'])
  }

}
