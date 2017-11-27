import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-cities',
  templateUrl: './other-cities.component.html',
  styleUrls: ['./other-cities.component.scss']
})


export class OtherCitiesComponent implements OnInit {
  title = 'AVIS in other cities of Italy';
  allCitiesPage = {'item' : 'All cities in Italy where AVIS works', 'href' : '#link_All'};
  itemText = 'AVIS Car Rental in ';
  citiesList = [
    {'item' : 'Rome', 'href' : '#link_Rome'},
    {'item' : 'Milan', 'href' : '#link_Milan'},
    {'item' : 'Venecie', 'href' : '#link_Venecie'},
    {'item' : 'Rome', 'href' : '#link_Rome'},
    {'item' : 'Milan', 'href' : '#link_Milan'},
    {'item' : 'Venecie', 'href' : '#link_Venecie'},
    {'item' : 'Rome', 'href' : '#link_Rome'},
    {'item' : 'Milan', 'href' : '#link_Milan'},
    {'item' : 'Venecie', 'href' : '#link_Venecie'},
    {'item' : 'Rome', 'href' : '#link_Rome'},
    {'item' : 'Milan', 'href' : '#link_Milan'},
    {'item' : 'Venecie', 'href' : '#link_Venecie'},
    {'item' : 'Rome', 'href' : '#link_Rome'},
    {'item' : 'Milan', 'href' : '#link_Milan'},
    {'item' : 'Venecie', 'href' : '#link_Venecie'},
    {'item' : 'Rome', 'href' : '#link_Rome'},
    {'item' : 'Milan', 'href' : '#link_Milan'},
    {'item' : 'Venecie', 'href' : '#link_Venecie'},
    {'item' : 'Rome', 'href' : '#link_Rome'},
    {'item' : 'Milan', 'href' : '#link_Milan'},
  ];
  constructor() { }

  ngOnInit() {
  }
}
