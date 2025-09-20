import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="p-6">
    <h2 class="text-2xl font-semibold mb-4">Add Product</h2>
    <form (ngSubmit)="save()" class="max-w-md bg-white p-4 rounded-xl shadow">
      <label class="block mb-2">Name</label>
      <input [(ngModel)]="name" name="name" class="w-full border rounded px-3 py-2 mb-4" />
      <label class="block mb-2">Price</label>
      <input [(ngModel)]="price" name="price" type="number" class="w-full border rounded px-3 py-2 mb-6" />
      <button class="rounded-xl px-4 py-2 bg-sky-500 text-white">Save</button>
    </form>
  </div>
  `
})
export class ProductFormComponent {
  private api = inject(ProductService);
  private router = inject(Router);
  name = ''; price: number | null = null;
  save() {
    if (!this.name || this.price == null) return;
    this.api.create({ name: this.name, price: this.price }).subscribe(() => this.router.navigateByUrl('/products'));
  }
}
