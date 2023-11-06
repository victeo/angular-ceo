import { Component, Inject } from '@angular/core';
import { CategoryService } from 'src/app/api/category/category.service';

interface Categoria {
    id: number;
    nome: string;
}

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.less']
})
export class CategoryComponent {

    constructor(@Inject(CategoryService) private categoryService: CategoryService) { }
    
    categorias: Categoria[] = [];

    ngOnInit(): void {
        this.buscarCategorias();
    }
    buscarCategorias() {
        this.categoryService.getCategorias().subscribe(
            data => {
                this.categorias = data;
            },
            error => {
                console.error('Erro ao buscar categorias', error);
            }
        );
    }
}