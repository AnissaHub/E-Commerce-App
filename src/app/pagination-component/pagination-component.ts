import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-component',
  standalone: true,
  templateUrl: './pagination-component.html',
  styleUrl: './pagination-component.scss'
})
export class PaginationComponent {

  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Input() totalItems!: number;

  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  goNext() {
    this.next.emit();
  }

  goPrev() {
    this.prev.emit();
  }
}