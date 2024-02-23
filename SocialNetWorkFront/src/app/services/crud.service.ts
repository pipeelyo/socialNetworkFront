import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CrudService {
    private readonly http = inject(HttpClient);

    getAllPost(): Observable<any> {
        return this.http.get('http://localhost:3000/api/v1/post');
    }

    getPostByid(id: number): Observable<any> {
        return this.http.get('http://localhost:3000/api/v1/post/' + id);
    }

    getPostByUser(idUser: number): Observable<any> {
        return this.http.get('http://localhost:3000/api/v1/post/user/' + idUser);
    }

    createPost(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/api/v1/post', data);
    }

    editPost(id: number, data: any): Observable<any> {
        return this.http.put('http://localhost:3000/api/v1/post/' + id, data);
    }

    deletePost(id: number): Observable<any> {
        return this.http.delete('http://localhost:3000/api/v1/post/' + id);
    }

    getAllUser(): Observable<any> {
        return this.http.get('http://localhost:3000/api/v1/user');
    }

    getUserByid(id: number): Observable<any> {
        return this.http.get('http://localhost:3000/api/v1/user/' + id);
    }

    getUserByName(name: string): Observable<any> {
        return this.http.get('http://localhost:3000/api/v1/user/name/' + name); 
    }

    createUser(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/api/v1/user', data);
    }

    editUser(id: number, data: any): Observable<any> {
        return this.http.put('http://localhost:3000/api/v1/user/' + id, data);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete('http://localhost:3000/api/v1/user/' + id);
    }
}