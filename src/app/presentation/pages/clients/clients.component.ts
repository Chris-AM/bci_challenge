import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from '../../../use-cases/client/client.service';
import { ClientModel, User } from '../../../domain/models/client.model';
import { GetClientsDto } from '../../../domain/dto/get-clients.dto';
import { ClientTableComponent } from './client-table/client-table.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ClientTableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export default class ClientsComponent implements OnInit {
  private readonly service: ClientService = inject(ClientService);

  public clients = signal<ClientModel[]>([]);
  public datasource: MatTableDataSource<User> = new MatTableDataSource();
  public limit = signal<number>(10);
  public select = signal<string[]>([]);
  public skip = signal<number>(0);
  public total = signal<number>(0);
  public isLoadingResults = true;

  ngOnInit(): void {
    this.getAllClients();
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
      },
      error: (error) => {
        console.error('🚀 error => ', error);
      },
    });
  }
}
