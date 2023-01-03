import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  items : Product[] = this.cartService.getProducts();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    age: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {
    this.cartService.clearCart();
    let customerName = this.checkoutForm.get('name')?.value;
    window.alert(`Your order has been confirmed: ${customerName}`);
    this.checkoutForm.reset();
  }
}
