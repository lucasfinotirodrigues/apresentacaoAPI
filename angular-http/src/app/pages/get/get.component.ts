import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  totalPacotesAngular?: number;
  results?: Array<SearchResult>;
  resultadosMapeados?: Array<Package>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPacotesAngular(): void {
    this.http.get<SearchResults>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      this.totalPacotesAngular = data.total;
      this.results = data.results;
      this.resultadosMapeados = this.results.map(it => it.package);
    });
  }

  trazer(){
    this.getPacotesAngular()
  }
}

interface SearchResults {
  total: number;
  results: Array<SearchResult>;
}

interface SearchResult {
  package: Package;
}

interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
}
