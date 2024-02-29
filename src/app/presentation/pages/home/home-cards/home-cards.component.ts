import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeModel } from '../../../../domain/models/home.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-cards',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.scss',
})
export class HomeCardsComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  @Input() content: string = '';
  @Input() goto: string = '';
}
