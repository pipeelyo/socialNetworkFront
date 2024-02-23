import { Component, OnInit, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {

  private readonly crudService = inject(CrudService);
  items$: Array<any> = []
  


  ngOnInit() {
    this.getPost();
  }

  getPost = () => {
    this.crudService.getAllPost().subscribe(data => this.items$ = data);
  }

  onSubmit = async (id:number) => {
    await this.crudService.createPost(id);
  }

}