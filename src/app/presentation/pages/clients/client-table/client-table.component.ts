import { AfterContentInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { User } from '../../../../domain/models/client.model';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [
    RouterModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.scss',
})
export class ClientTableComponent  {
  @Input() isLoadingResults = true;
  @Input() datasource: MatTableDataSource<User> = new MatTableDataSource();

  public displayedColumns = [
    'name',
    'age',
    'email',
    'phone',
    'address',
    'actions',
  ];

}
