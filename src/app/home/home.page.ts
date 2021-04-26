import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service'
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [StatusBar]
})
export class HomePage {
title: any;
price: any;
description: any;

  constructor(private api:ServicesService, private statusbar:StatusBar) {}

  ngOnInit(){
    this.getData();
    this.statusbar.backgroundColorByHexString('#f3d1dc');//statusbar color


  }

  getData(){
    return this.api.getPost().subscribe(data => {
      console.log("API DATA:", data);
      this.title = data;
    })
    }

  }
