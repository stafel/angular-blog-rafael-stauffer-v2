import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDataService } from '../../core/blog-data.service';
import { Blog } from '../../shared/blog-overview-card/blog-overview-card.component';

@Component({
  selector: 'app-blog-overview-page',
  templateUrl: './blog-overview-page.component.html',
  styleUrls: ['./blog-overview-page.component.scss'],
})
export class BlogOverviewPageComponent {
  blogs$: Observable<Blog[]>;

  constructor(private blogService: BlogDataService) {
    this.blogs$ = this.blogService.getBlogPosts() as Observable<Blog[]>;
  }
}
