import { Component, OnInit, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {

  private readonly crudService = inject(CrudService);
  items$: Array<any> = []
  postAvailability: boolean = false;


  ngOnInit() {
    this.getPost();
    this.postAvailability = (localStorage.getItem("login") !== null);
  }

  getPost = () => {
    this.crudService.getAllPost().subscribe(data => this.items$ = data);
  }

  onSubmit = async (post:Post) => {
    await this.crudService.createPost(post);
  }

}
