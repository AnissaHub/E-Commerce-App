import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-component',
  standalone: true,
  templateUrl: './pagination-component.html',
  styleUrl: './pagination-component.scss'
})
export class PaginationComponent {

  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;
  @Input() currentPage!: number;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  goToPage(page: number) {
    this.pageChange.emit(page);
  }

  get pages(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }
}