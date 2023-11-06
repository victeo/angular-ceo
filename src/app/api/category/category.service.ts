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

    constructor(private readonly http: HttpClient) { }
    

    getCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>('/api/categoria/v1');
    }
}