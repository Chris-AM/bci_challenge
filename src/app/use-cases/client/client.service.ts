import { Injectable, inject } from '@angular/core';
import { ClientDatasourceImpl } from '../../infrastructure/datasources/client.datasource.impl';
import { Observable, map } from 'rxjs';
import { ClientModel } from '../../domain/models/client.model';
import { GetClientsDto } from '../../domain/dto/get-clients.dto';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly dataSource: ClientDatasourceImpl =
    inject(ClientDatasourceImpl);

  getAllClients(parameters: GetClientsDto): Observable<ClientModel[]> {
    const mappedClient = this.dataSource.getAllClients(parameters).pipe(
      map((response: ClientModel[]) => {
        if (Array.isArray(response)) {
          return response.map((user) => this.mapToClientModel(user));
        }
        return [this.mapToClientModel(response)];
      })
    );
    return mappedClient;
  }

  getClientById(id: number): Observable<ClientModel> {
    return this.dataSource.getClientById(id);
  }

  createClient(client: ClientModel): Observable<ClientModel> {
    return this.dataSource.createClient(client);
  }

  updateClient(client: ClientModel): Observable<ClientModel> {
    return this.dataSource.updateClient(client);
  }

  deleteClient(id: number): Observable<boolean> {
    return this.dataSource.deleteClient(id);
  }

  private mapToClientModel(data: ClientModel): ClientModel {
    return data;
  }
}
