import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ClientService } from '../../../use-cases/client/client.service';
import { ClientModel } from '../../../domain/models/client.model';
import { GetClientsDto } from '../../../domain/dto/get-clients.dto';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export default class ClientsComponent implements OnInit {
  private readonly service: ClientService = inject(ClientService);

  public clients = signal<ClientModel[]>([]);
  public limit = signal<number>(10);
  public select = signal<string[]>(['age']);
  public skip = signal<number>(9);
  public total = signal<number>(0);

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
        console.log('🚀 clients => ', clients);
        const allClients = clients.map((client) => client.total)[0];
        this.total.set(allClients);
        this.clients.set(clients);
      },
      error: (error) => {
        console.error('🚀 error => ', error);
      },
    });
  }
}
