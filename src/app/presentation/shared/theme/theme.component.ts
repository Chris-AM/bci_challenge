import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  public isDarkTheme = signal<boolean>(false);
  public isDarkModeActive = signal<boolean>(false);


  public toggleTheme(): void {
    this.isDarkTheme.set(!this.isDarkTheme().valueOf());
  }
}
