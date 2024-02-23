import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private crudService: CrudService) {
  }

  dataLogin: User | undefined;

  ngOnInit(): void {
  }

  onSubmit = async () => {
    const name = this.getNameAndPassword()[0];
    const password = this.getNameAndPassword()[1];
    await this.login(name, password)
  }

  login = async (name: string, password: string) => {
    const response = await this.crudService.getUserByName(name);
    response.subscribe((data: User[]) => {
      if (name === data[0]?.full_name && password === data[0]?.password) {
        localStorage.setItem("login", JSON.stringify(data[0]));
      }
    });
  }

  getNameAndPassword = () => {
    const name = <HTMLInputElement>document.getElementById('fullName');
    const password = <HTMLInputElement>document.getElementById('password');
    return [name.value, password.value];
  }
}
