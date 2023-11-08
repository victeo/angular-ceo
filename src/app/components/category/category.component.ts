import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
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

    @ViewChild('nameCategory') nameCategory?: ElementRef;


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


    excluirCategoria(id: number): void {
        this.categoryService.deleteCategoria(id).subscribe(
            (response) => {
                console.log('Resposta:', response);
                console.info(`Categoria com ID ${id} excluída com sucesso.`);
                window.location.reload()
            },
            (error) => {
                console.error(`Erro ao excluir categoria: ${error}`);
            }
        );

    }
    criarCategoria(): void {
        if (this.nameCategory) {
            const nome = this.nameCategory.nativeElement.value;

            if (nome.trim() !== '') {
                const novaCategoria = { id: null as unknown as number, nome }; // Corrigido aqui
                this.categoryService.postCategoria(novaCategoria).subscribe(
                    (categoria) => {
                        console.log('Nova categoria criada:', categoria);
                        window.location.reload()
                    },
                    (error) => {
                        console.error('Erro ao criar categoria:', error);
                    }
                );
            }
        }
    }
}