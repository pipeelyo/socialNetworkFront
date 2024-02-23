import { Routes } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { CreateUserComponent } from './components/createUser/createUser.componet';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'post', component: PostComponent },
    { path: 'register', component: CreateUserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo:'/post', pathMatch: 'full'}
];
