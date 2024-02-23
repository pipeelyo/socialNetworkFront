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
  ngOnInit(): void {
    console.log(localStorage.getItem('login'))
  }
}
