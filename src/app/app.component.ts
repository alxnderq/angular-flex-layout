import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { Observable } from 'rxjs';
import { Category } from './interfaces/category.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private service: CategoriesService) {
    this.categories$ = this.service.getCategories();
  }

  ngOnInit() {}
}
