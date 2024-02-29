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

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule, LinksComponent, GetCodeComponent, ThemeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css',
})
export class ToolBarComponent implements OnInit {
  public title = signal<String>('');

  ngOnInit(): void {
    this.onTitleChange();
  }

  public onTitleChange(): void {
    this.title.set('Tienda Electrónica');
  }
}
