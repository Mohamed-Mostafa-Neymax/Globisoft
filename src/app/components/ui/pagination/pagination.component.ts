import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() blogsLength!: number;
  @Input() blogsPerPage!: number;
  activePage = 1;
  paginationNums!: number[];
  firstPaginationNums!: number[];
  lastPaginationNums!: number[];
  

  ngOnInit() {
    this.paginationNums = Array.from(
      {length: (this.blogsLength / this.blogsPerPage) % 2 === 0 ? this.blogsLength / this.blogsPerPage : Math.ceil(this.blogsLength / this.blogsPerPage)},
      (_, num) => num + 1
    );
    this.firstPaginationNums = [1, 2, 3];
    this.lastPaginationNums = this.paginationNums.slice(this.paginationNums.length - 3);
  }

  paginateHandler(pageNum: number, numsType?: string) {
    this.activePage = pageNum;
    if (pageNum > 1 && pageNum < this.paginationNums.length - 3 && numsType === 'first-nums')
      this.firstPaginationNums = [this.activePage - 1, this.activePage, this.activePage + 1];
  }

  paginateDirectionHandler(dir: string) {
    if (dir === 'prev' && this.activePage > 1) {
      this.activePage--;
      if (this.activePage === this.lastPaginationNums[0] - 1)
        this.firstPaginationNums = [this.activePage - 2, this.activePage - 1, this.activePage];
    }
    else if ( (dir === 'next') && this.activePage < this.paginationNums.length) this.activePage++;
    this.paginateHandler(this.activePage, 'first-nums');
  }
}
