import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { CommonModule, NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { NgFor } from '@angular/common';
import { CardServicesService } from '../../Services/card-services.service';

@Component({
  selector: 'app-card',
  imports: [NgFor, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {


  cardDetails: any;

  constructor(
    private http: HttpClient,
    public serv: CardServicesService
  ) { }

  ngOnInit(): void {
    this.card();
  }

  card() {
    // let url = "https://fake-store-api.mock.beeceptor.com/api/users";

    // this.http.get(url).subscribe((resp => {
    //   // console.log(resp);
    //   this.cardDetails = resp;
    //   console.log(this.cardDetails);
    // }))

    this.cardDetails = this.serv.USERS;
    // console.log(this.cardDetails);

  };

  goBack() {
    // window.history.back();
    console.log(window.history.back());
  }
}
