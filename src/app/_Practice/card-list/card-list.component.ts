import { Component, numberAttribute, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { CardServicesService } from '../../Services/card-services.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [NgIf, NgClass],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {

  userDetail: any;
  arr: any

  constructor(private Route: ActivatedRoute, public serv: CardServicesService) { }

  ngOnInit(): void {

    // this.Route.paramMap.subscribe(__param => {
    //   let userid = Number(__param.get('id'))
    //   this.userDetail = this.serv.USERS.find(u => u.id == userid)
    //   console.log(this.userDetail);
    // })

    let userid = Number(this.Route.snapshot.paramMap.get('id'));
    this.userDetail = this.serv.USERS.find(u => u.id == userid)
  };

  goBack() {
    window.history.back();
  };
}
