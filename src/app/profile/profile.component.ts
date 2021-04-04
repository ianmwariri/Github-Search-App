import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users:User[]=[
    new User('ianmwariri', 'Ian Mwariri', 7, new Date(2020,3,14)),
    new User('spectre', 'Spectre', 20, new Date(2019,6,7)),
    new User('ice', 'Ice', 45, new Date(2017,1,3)),
  ];
  constructor() { }

  ngOnInit(){
  }

}
