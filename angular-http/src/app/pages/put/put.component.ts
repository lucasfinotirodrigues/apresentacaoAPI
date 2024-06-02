import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  postId: any;
  postForm: FormGroup;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      title: ['Título padrão']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const updatedData = this.postForm.value;
    const postIdToUpdate = 1;

    this.dataService.updatePost(postIdToUpdate, updatedData)
      .subscribe(
        data => {
          console.log('Requisição PUT bem-sucedida', data);
          this.postId = data.id;
        },
        error => {
          console.error('Erro ao realizar a requisição PUT', error);
        }
      );
  }
}
