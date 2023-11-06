import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Categoria {
    id: number;
    nome: string;
  }

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    private apiUrl: string = 'http://20.88.41.42/api/categoria/v1';

    constructor(private readonly http: HttpClient) { }
    

    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.apiUrl);
    }
}