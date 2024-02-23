import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {User} from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  templateUrl: './sideBar.component.html'
})

export class SideBarComponent implements OnInit {

  user: User | undefined; 
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const local = localStorage.getItem('login');
    if(local !== null){
      this.user = JSON.parse(local);
    }
  }

  logOut = () => {
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
  navigateToLogin = () => {
    this.router.navigate(['/login']);
  }
  navigateToRegister = () => {
    this.router.navigate(['/register']);
  }
  navigateToPost = () => {
    this.router.navigate(['/post']);
  } 
}
