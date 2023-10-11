import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
navigate(): void {
    this.router.navigate(["application-form"]);
  }
}
