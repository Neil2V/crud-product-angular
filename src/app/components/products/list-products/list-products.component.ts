import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : Product[] = [];

  constructor(
    private productService : ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.productService.listProducts().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteProduct(id: number): void{
    this.productService.deleteProduct(id).subscribe(
      data => {
        this.toastr.success('Deleted product', 'Ok!',{
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.loadProducts();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail!',{
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    )
  }

}
