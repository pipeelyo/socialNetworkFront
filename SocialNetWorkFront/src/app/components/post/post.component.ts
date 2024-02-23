import { Component, OnInit, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Post } from '../../interfaces/post.interface';

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

  onSubmit = async (post:Post) => {
    await this.crudService.createPost(post);
  }

}