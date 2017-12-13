import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitemap-layout',
  templateUrl: './sitemap-layout.component.html',
  styleUrls: ['./sitemap-layout.component.scss']
})
export class SitemapLayoutComponent implements OnInit {
  linksList = [
    {
      title: "Company",
      items: [
        { item: "About Us", link: "#", optValue: "about_us" },
        { item: "News", link: "#", optValue: "news" },
        { item: "Cooperation", link: "#", optValue: "cooperation" },
        { item: "Contacts", link: "#", optValue: "contacts" },
      ]
    },
    {
      title: "Useful",
      items: [
        { item: "Destination guide", link: "#", optValue: "destination_guide" },
        { item: "Where Rent a Car", link: "#", optValue: "where_rent" },
        { item: "Best Deals", link: "#", optValue: "best_deals" },
        { item: "Terms of use", link: "#", optValue: "terms_of_use" },
        { item: "Mobile Apps", link: "#", optValue: "mobile_apps" },
      ]
    },
    {
      title: "Help",
      items: [
        { item: "Privacy Policy", link: "#", optValue: "privacy_policy" },
        { item: "Terms", link: "#", optValue: "terms" },
        { item: "FAQ", link: "#", optValue: "faq" },
      ]
    },
    {
      title: "Cooperation & Partner Programs",
      title_lg: "Partner Programs",
      items: [
        { item: "Affiliate Programs For Publishers", link: "#", optValue: "affiliate_programs" },
        { item: "For Car Rental Suppliers and Brokers", link: "#", optValue: "for_car_rental" },
        { item: "For Travel Agencies and Aggregators", link: "#", optValue: "for_travel_agencies" },
        { item: "Customer’s Referal Program", link: "#", optValue: "customers_referal" },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
