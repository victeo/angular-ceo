import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = '/api/categoria/v1';

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

    postCategoria(categoria: Categoria): Observable<Categoria> {
        return this.http.post<Categoria>('/api/categoria/v1', categoria);
    }

    deleteCategoria(id: number): Observable<any> {
        const url = `${'http://20.88.41.42/api/categoria/v1/'}${id}`;
        return this.http.delete<any>(url, { observe: 'response' });
    }
}
