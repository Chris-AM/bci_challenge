import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LinkService } from '../../../use-cases/link/link.service';
import { LinkModel } from '../../../domain/models/link.model';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent implements OnInit {
  public linkItems = signal<LinkModel[]>([]);

  private readonly navService: LinkService = inject(LinkService);
  constructor() {}

  ngOnInit(): void {
    this.getNavbarItems();
  }

  private getNavbarItems(): void {
    this.navService.getLinks().subscribe({
      next: (items) => {
        console.log('items', items);
        this.linkItems.set(items);
      },
    });
  }
}
