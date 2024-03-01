import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import { ClientService } from '../../../use-cases/client/client.service';
import { ClientModel, User } from '../../../domain/models/client.model';
import { GetClientsDto } from '../../../domain/dto/get-clients.dto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clients',
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
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export default class ClientsComponent implements OnInit, AfterContentInit {
  private readonly service: ClientService = inject(ClientService);

  public clients = signal<ClientModel[]>([]);
  public datasource: MatTableDataSource<User> = new MatTableDataSource();
  public limit = signal<number>(10);
  public select = signal<string[]>([]);
  public skip = signal<number>(0);
  public total = signal<number>(0);
  public displayedColumns = [
    'name',
    'age',
    'email',
    'phone',
    'address',
    'actions',
  ];
  public isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllClients();
  }

  ngAfterContentInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  private getAllClients(): void {
    const parameters: GetClientsDto = {
      limit: this.limit(),
      select: this.select(),
      skip: this.skip(),
    };
    this.service.getAllClients(parameters).subscribe({
      next: (clients) => {
        this.isLoadingResults = false;
        const allClients = clients.map((client) => client.total)[0];
        this.total.set(allClients);
        this.clients.set(clients);
        this.datasource = new MatTableDataSource<User>(
          clients.map((client) => client.users).flat()
        );
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
      },
      error: (error) => {
        console.error('🚀 error => ', error);
      },
    });
  }
}
