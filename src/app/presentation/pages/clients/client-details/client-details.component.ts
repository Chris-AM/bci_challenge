import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss',
})
export default class ClientDetailsComponent implements OnInit {
  @Input('id') clientId!: string;

  ngOnInit(): void {}
}
