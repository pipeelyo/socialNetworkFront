import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CrudService } from './services/crud.service';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from "./components/sideBar/sideBar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CrudService],
})
export class AppComponent {



}
