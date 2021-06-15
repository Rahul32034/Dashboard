import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  username=""
  useremail=""
  password=""
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.username=this.activatedRoute.snapshot.params.id;
    if (this.username=="Mark") {
      this.useremail="mark@gmail.com";
      this.password="@mdo";
      
    }
    if (this.username=="Jaccob") {
      this.useremail="jaccob@gmail.com";
      this.password="1478";
      
    }
    if (this.username=="Harry") {
      this.useremail="harry@gmail.com";
      this.password="1234";
      
    }


  }

}
