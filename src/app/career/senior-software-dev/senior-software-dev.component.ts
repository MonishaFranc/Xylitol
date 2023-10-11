import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senior-software-dev',
  templateUrl: './senior-software-dev.component.html',
  styleUrls: ['./senior-software-dev.component.css']
})
export class SeniorSoftwareDevComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
navigate(): void {
    this.router.navigate(["application-form"]);
  }
}
