import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];
  users: User;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = 'Jane Doe';
    this.age = 19;
    this.address = {
        street: '666 Main Street',
        city : 'Tokio',
        state: 'NJ',
        zipcode : '00088'
    };
    this.hobbies = ['Code', 'Watch YouTube', 'Listen to music'];



  // Data service get data fro placeholder
  this.dataService.getPosts().subscribe((users) => {
    // console.log(posts);
    this.users = users;
  });
  }

  onClick() {
    this.hobbies.push('Sleep');
  }



  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
  for (let i = 0; i < this.hobbies.length; i++) {
    if (this.hobbies[i] === hobby ) {
      this.hobbies.splice(i, 1);
    }
  }
  }
}
interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  }


interface User {
  id: number;
  login: string;
  avatar_url: string;
  type: string;
  html_url: string;
}
