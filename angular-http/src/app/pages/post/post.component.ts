import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  postId?: number;
  nome: string = '';
  curso: string = '';
  termo: number | null = null;
  isPostSuccessful: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const aluno = {
      nome: this.nome,
      curso: this.curso,
      termo: this.termo
    };

    this.http.post<Aluno>('https://reqres.in/api/users', aluno)
      .subscribe(dados => {
        this.postId = dados.id;
        this.nome = dados.nome;
        this.curso = dados.curso;
        this.termo = dados.termo;
        this.isPostSuccessful = true; // Indica que o POST foi bem-sucedido
      }, error => {
        console.error('Erro ao enviar os dados', error);
        this.isPostSuccessful = false; // Indica que o POST falhou
      });
  }
}

interface Aluno {
  id: number;
  nome: string;
  termo: number;
  curso: string;
}
