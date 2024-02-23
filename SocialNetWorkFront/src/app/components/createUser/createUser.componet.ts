import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './createUser.component.html',
})
export class CreateUserComponent implements OnInit {

  data: any = {};

  constructor(private crudService: CrudService) { }

  ngOnInit = async () => {
    
  }

  onSubmit = async () => {
    await this.crudService.createPost(this.data);
  }

}