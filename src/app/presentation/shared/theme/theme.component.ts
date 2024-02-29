import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../use-cases/theme/theme.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule, MatSlideToggleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  private readonly themeService: ThemeService = inject(ThemeService);

  public actualTheme = signal<string>('dark');

  public toggleTheme() {
    this.themeService.updateTheme();
    this.actualTheme.set(this.themeService.themeSignal());
  }
}
