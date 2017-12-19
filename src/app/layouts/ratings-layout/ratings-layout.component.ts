import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-layout',
  templateUrl: './ratings-layout.component.html',
  styleUrls: ['./ratings-layout.component.scss']
})
export class RatingsLayoutComponent implements OnInit {

  header = {
    text: 'AVIS Customer Ratings in',
    place: 'Milan',
    logo_path: '/assets/layouts/ratings-layout/assets/avis.png'
  };

  ratingsList = [
    { 'item': 'Overall value for money of your car rental', 'value': '8.3' },
    { 'item': 'How easy was it to find pickup location?', 'value': '8.2' },
    { 'item': 'Work efficiency of the car rental agents', 'value': '8.4' },
    { 'item': 'Time spent picking up the car', 'value': '8.5' },
    { 'item': 'Time spent dropping off the car', 'value': '7.9' },
    { 'item': 'Car cleanliness', 'value': '7.6' },
    { 'item': 'Overall condition of the car', 'value': '7.8' }
  ];

  reviewsData = [
    {
      userData: {
        name: 'Lelde',
        country: 'Latvia',
        countryCode: 'lv',
        date: 'August 18, 2014',
        rating: 8.3
      },

      reviewsPlus: [
        'Perfect location. Easy to reach from airport TXL (TXL bus). Very convenient for shopping purposes, all popular shops are near- Primark, C&A,Galeria Kaufhof, Alexa... Breakfast is very plentiful.'
      ],

      reviewsMinus: [
        'Quadruaple room was very small.'
      ]
    },
    //
    {
      userData: {
        name: 'Maris',
        country: 'Latvia',
        countryCode: 'lv',
        date: 'June 22, 2014',
        rating: 7.6
      },

      reviewsPlus: [
        'The location is excellent: 5 minutes walking from the Alexanderplatz station The breakfast is very good and the room is very comfortable and exactly as in the photos.'
      ],

      reviewsMinus: [
        'I arrived very late at the hotel (11pm) and the room service woke me up at 8:30am after the first night. When I arrived at the hotel on the third night, the window was… Read more'
      ]
    },
    //
    {
      userData: {
        name: 'Joana',
        country: 'Portugal',
        countryCode: 'pt',
        date: 'June 22, 2014',
        rating: 10
      },

      reviewsPlus: [
        'I did like everything about this Hotel.'
      ],

      reviewsMinus: [
      ]
    },
    //
    {
      userData: {
        name: 'Maria',
        country: 'Netherlands',
        countryCode: 'nl',
        date: 'December 2, 2014',
        rating: 9.0
      },

      reviewsPlus: [
        'The location is excellent: 5 minutes walking from the Alexanderplatz station The breakfast is very good and the room is very comfortable and exactly as in the photos.'
      ],

      reviewsMinus: [
        'Almost non-existent wifi, uncomfortable room'
      ]
    },
    //
    {
      userData: {
        name: 'Bernadette',
        country: 'Netherlands',
        countryCode: 'nl',
        date: 'December 2, 2014',
        rating: 9.8
      },

      reviewsPlus: [
        'The location is excellent: 5 minutes walking from the Alexanderplatz station The breakfast is very good and the room is very comfortable and exactly as in the photos.'
      ],

      reviewsMinus: [
        'Nothing'
      ]
    },
    //
  ];

  allReviews = { 'item': 'All reviews about AVIS rental service in Milan', 'href': '#link_allReviews' };

  constructor() { }
  ngOnInit() {
  }

}
