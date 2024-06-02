import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  status: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  deletePost(id: string): void {
    const postId = Number(id);
    if (isNaN(postId)) {
      this.status = 'Invalid ID';
      return;
    }

    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .subscribe(
        () => this.status = 'Excluido com sucesso',
        error => this.status = `Falha ao excluir: ${error.message}`
      );
  }
}
