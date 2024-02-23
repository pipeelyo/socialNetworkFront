import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './createUser.component.html',
})
export class CreateUserComponent implements OnInit {

  data: any = {};

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit = () => {

  }

  async onSubmit() {
    await this.createUser();
  }

  createUser = async () => {
     const informationUser = this.getInformationUser();
     const dataUser:User = {
      full_name: informationUser[0],
      email: informationUser[1],
      password: informationUser[2],
      age: Number(informationUser[3])
     }
     ;(await this.crudService.createUser(dataUser)).subscribe((data) => {
        console.log('Usuario Creado');
        this.router.navigate(['/login']);
     });

  }

  

  navigateToLogin = () => {
    this.router.navigate(['/login']);
  }

  getInformationUser = () => {
    const name = <HTMLInputElement>document.getElementById('full_name');
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');
    const confirmPassword = <HTMLInputElement>document.getElementById('confirmPassword');
    const age = <HTMLInputElement>document.getElementById('age');
    if(password.value !== confirmPassword.value) console.error('las contasenas no son iguales');
    return [ name.value, email.value , password.value, age.value];
  }

}