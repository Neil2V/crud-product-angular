import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'new', component: NewProductComponent},
  {path: 'detail/:id', component: DetailProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: '**', redirectTo: '' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
