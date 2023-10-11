import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../_service/general.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(public _service : GeneralService) { }

  ngOnInit(): void {
  }

}
