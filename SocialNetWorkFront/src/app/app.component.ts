import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CrudService } from './services/crud.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CrudService],
})
export class AppComponent {}
