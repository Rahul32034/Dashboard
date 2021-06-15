import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
productname=""
productmodel=""
productprice=""

  constructor(private activatedRoute:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.productname=this.activatedRoute.snapshot.params.id;
    if (this.productname=="Samsung") {
      this.productmodel="S20";
      this.productprice="50,000";
      
    }
    if (this.productname=="Oppo") {
      this.productmodel="Reno";
      this.productprice="25,000";
      
    }
    if (this.productname=="Realme") {
      this.productmodel="X50 Pro";
      this.productprice="40,000";
      
    }
  }

}
