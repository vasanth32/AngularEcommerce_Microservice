import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:5000/api/Products/defaults').subscribe(data => {
      this.products = data;
    });
  }
}
