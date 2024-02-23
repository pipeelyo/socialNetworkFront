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
  dataLogin: any;
  ngOnInit(): void {
    
  }
  onSubmit = () => {
    const name = this.getNameAndPassword()[0];
    const password = this.getNameAndPassword()[1];
    this.getUser(name);
    this.login(name, password)
   
   
    
  }

  getUser = (name:string) => {
    this.crudService.getUserByName(name).subscribe((data) => {
      this.dataLogin = data;
    });
  }

  login = (name: string, password: string) => {
    console.log('res', this.dataLogin);
    if(name === this.dataLogin[0].full_name && password === this.dataLogin[0].password){
      console.log('entre al if');
      
      localStorage.setItem("login", 'true');
    }
  }

  getNameAndPassword = () => {
    const name = <HTMLInputElement> document.getElementById('fullName');
    const password = <HTMLInputElement> document.getElementById('password');
    return [name.value, password.value];
  }

}