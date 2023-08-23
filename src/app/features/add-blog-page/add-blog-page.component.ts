import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss'],
})
export class AddBlogPageComponent {
  title = new FormControl('');
  text = new FormControl('');

  /**
   * resetForm
   * clears all userinput
   */
  public resetForm() {
    this.title.setValue('');
    this.text.setValue('');
  }
}
