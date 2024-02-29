import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LinksComponent } from '../links/links.component';
import { GetCodeComponent } from '../get-code/get-code.component';
import { ThemeComponent } from '../theme/theme.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LinksComponent,
    GetCodeComponent,
    ThemeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css',
})
export class ToolBarComponent implements OnInit {
  public title = signal<string>('');
  public toggleMenu = signal<boolean>(false);

  ngOnInit(): void {
    this.onTitleChange();
  }

  public onTitleChange(): void {
    this.title.set('Tienda Electrónica');
  }

  public onToggleMenu(): void {
    this.toggleMenu.set(!this.toggleMenu().valueOf());
  }
}
