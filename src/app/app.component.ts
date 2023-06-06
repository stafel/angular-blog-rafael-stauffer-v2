import { Component } from '@angular/core';
import { BlogDataService } from './core/blog-data.service';
import { Observable } from 'rxjs';
import { Blog } from './core/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-frog-16';
  blogs$: Observable<Blog[]>;

  constructor(private blogService: BlogDataService) {
    this.blogs$ = this.blogService.getBlogPosts();
  }
}
