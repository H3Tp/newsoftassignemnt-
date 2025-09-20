import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export type Product = { _id?: string; name: string; price: number };

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private API = `${environment.API}/products`;
  list() { return this.http.get<Product[]>(this.API); }
  get(id: string) { return this.http.get<Product>(`${this.API}/${id}`); }
  create(p: Product) { return this.http.post<Product>(this.API, p); }
  update(id: string, p: Partial<Product>) { return this.http.put<Product>(`${this.API}/${id}`, p); }
  remove(id: string) { return this.http.delete<{ ok: boolean }>(`${this.API}/${id}`); }
}
