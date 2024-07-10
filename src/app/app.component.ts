import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CategoryComponent } from './category/category.component';
import { CoursesComponent } from './courses/courses.component';
import { ReviewsComponent } from './reviews/reviews.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, JumbotronComponent, CategoryComponent, CoursesComponent, ReviewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome';
}
