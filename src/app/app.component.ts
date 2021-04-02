import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileDetails:string[];
  

  constructor(){
    this.profileDetails = ['profilePic', 'username', 'Repositories', 'Followers', 'Follwoing']
  } 
}
