import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title = "CONTACT US";
  email = "rogambery@gmail.com";
  website = "www.gallantslegends.co.za";
  tweeter = "@GallantsQS";
  telephone = "Tel:+267 72862105 , +267 72991338"
  constructor() { }

  ngOnInit(): void {
  }

}
