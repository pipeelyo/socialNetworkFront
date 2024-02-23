import {Component, OnInit, inject} from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {Post} from '../../interfaces/post.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  items$: Array<any> = []
  postAvailability: boolean = false;

  constructor(private crudService: CrudService, private router: Router) {
  }

  ngOnInit() {
    this.getPost();
    this.postAvailability = (localStorage.getItem("login") !== null);
  }

  onSubmit = async () => {
    const data = this.getTitleAndPost()
    const title = data[0];
    const post = data[1];
    await this.createPost(title, post)
  }

  getPost = () => {
    this.crudService.getAllPost().subscribe(data => this.items$ = data);
  }

  createPost = async (title: string, post: string) => {
    const user = localStorage.getItem('login');
    if (user === null || user === undefined) {
      alert('User without login');
      return;
    }
    const jsonUser = JSON.parse(user);
    const newPost = {
      title: title,
      content: post,
      user_id: jsonUser.id,
      likes: 0
    }
    const response = await this.crudService.createPost(newPost);
    response.subscribe((data: any) => {
      if (data === null || data.success == false || data.data.length == 0) {
        alert('User could not be created');
        return;
      }
    });
    location.reload();
  }

  getTitleAndPost = () => {
    const title = <HTMLInputElement>document.getElementById('title');
    const post = <HTMLInputElement>document.getElementById('post');
    return [title.value, post.value];
  }
}
