import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }
 navigate(): void {
    this.router.navigate(["application-form"]);
  }
}
