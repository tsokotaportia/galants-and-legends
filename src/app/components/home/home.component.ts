import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardTitle = "Galants & Legends"
  title = "Your Construction Consultant Company"
  images = [
    {
      imgUrl : "assets/images/image7.jpeg",
      cardText : "Some quick example text to build on the card title and make up the bulk of the."
    },
    {
      imgUrl : "assets/images/image8.jpeg",
      cardText : "Some quick example text to build on the card title and make up the bulk of the card'."
    },
    {
      imgUrl : "assets/images/image9.jpeg",
      cardText : "Some quick example text to build on the card title and make up the bulk of the card'."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
