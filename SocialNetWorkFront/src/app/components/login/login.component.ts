import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormControl } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    
  }
  onSubmit = () => {
    let response
    const name = <HTMLInputElement> document.getElementById('fullName');
    console.log('a ver', name.value);
    ( async () => {
       response = this.getUser(name.value);
    })
    ();
   
    console.log('res', response);
    
  }

  getUser = (name:string) => {
    this.crudService.getUserByName(name).subscribe((data) => {
      return data;
    });
  }

}