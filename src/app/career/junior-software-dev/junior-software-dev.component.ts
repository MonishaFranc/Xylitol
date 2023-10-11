import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-junior-software-dev',
  templateUrl: './junior-software-dev.component.html',
  styleUrls: ['./junior-software-dev.component.css']
})
export class JuniorSoftwareDevComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
  navigate(): void {
    this.router.navigate(["application-form"]);
  }

}
