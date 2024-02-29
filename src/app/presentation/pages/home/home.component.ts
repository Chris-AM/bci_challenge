import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { HomeModel } from '../../../domain/models/home.model';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HomeService } from '../../../use-cases/home/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCardsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  public homeData = signal<HomeModel[]>([]);

  private readonly homeService: HomeService = inject(HomeService);

  ngOnInit(): void {
    this.getHomeData();
  }

  private getHomeData(): void {
    this.homeService.getHomeData().subscribe({
      next: (data: HomeModel[]) => {
        this.homeData.set(data);
      },
      error: (err) => console.error(err),
    });
  }
}
