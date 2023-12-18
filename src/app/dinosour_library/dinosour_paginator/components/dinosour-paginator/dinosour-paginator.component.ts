import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DPageable } from 'src/app/data/DPageable';

@Component({
  selector: 'app-dinosour-paginator',
  templateUrl: './dinosour-paginator.component.html',
  styleUrls: ['./dinosour-paginator.component.css'],
})
export class DinosourPaginatorComponent implements OnInit {
  pageSize!: number;
  @Input() totalElements!: number;
  @Output() on_page!: EventEmitter<PageEvent>;

  constructor() {
    this.totalElements = 0;
    this.pageSize = DPageable.size;
    this.on_page = new EventEmitter();
  }

  ngOnInit(): void {}

  public handlePage($event: PageEvent) {
    this.on_page.emit($event);
  }
}
