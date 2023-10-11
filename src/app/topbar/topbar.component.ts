import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../_service/general.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public _service: GeneralService) { }

  ngOnInit(): void {
  }

}
