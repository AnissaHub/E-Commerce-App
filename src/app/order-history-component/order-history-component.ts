import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order';
import { Order } from '../models/orders';

@Component({
  selector: 'app-order-history-component',
  imports: [],
  templateUrl: './order-history-component.html',
  styleUrl: './order-history-component.scss',
})
export class OrderHistoryComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {

    this.orderService.getOrders()
      .subscribe(data => {

        this.orders = data;

      });

  }
}
