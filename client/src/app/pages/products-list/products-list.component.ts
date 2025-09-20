import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, CurrencyPipe } from '@angular/common';
import { ProductService, Product } from '../../core/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, CurrencyPipe],
  template: `
  <div class="p-6">
    <h2 class="text-2xl font-semibold mb-4">Products</h2>
    <div *ngIf="items$ | async as items" class="grid gap-3">
      <div *ngFor="let p of items" class="p-4 rounded-xl bg-white shadow flex justify-between">
        <div>
          <div class="font-medium">{{ p.name }}</div>
          <div class="text-gray-500">{{ p.price | currency:'USD' }}</div>
        </div>
      </div>
      <div *ngIf="!items.length" class="text-gray-500">No products yet.</div>
    </div>
  </div>
  `
})
export class ProductsListComponent {
  private api = inject(ProductService);
  items$: Observable<Product[]> = this.api.list();
}
