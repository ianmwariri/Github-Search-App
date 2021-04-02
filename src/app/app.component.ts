import { Component } from '@angular/core';
import { Profile } from './profile';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  users:User[]=[
    {username:'ianmwariri', name:'Ian Mwariri', repositories:7},
    {username: 'spectre', name:'Spectre', repositories:20 },
    {username: 'ice', name:'Ice', repositories:45 },
  ];
 
}
