import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from "../app.component";
import { auth } from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['/index']);
  }


}
