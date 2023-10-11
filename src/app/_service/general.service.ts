import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  g_phone: string = "+91 44-23630745";
  g_email: string = "info@techxylitol.com"; //"techxylitol@gmail.com";
  g_address: string = "P-12/25,2nd Floor, Kannadasan Street, M.M.D.A Colony. Chennai - 600 106";
  g_monsat: string = "Mon-Sat: 9am - 5pm";
  g_tue: string = "Tuesday: 9am - 12.30pm";
  g_holiday = "Sunday Holiday";
  constructor() { }
}
