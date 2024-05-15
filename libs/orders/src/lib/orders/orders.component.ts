import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {TestImport} from '@angular-monorepo/products';

@Component({
  selector: 'lib-orders',
  standalone: true,
  imports: [CommonModule, NgxJsonViewerModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  test: TestImport = { test: 'test' };
}
