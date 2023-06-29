import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './core/loading-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-frog-16';

  isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.state$;
  }
}
