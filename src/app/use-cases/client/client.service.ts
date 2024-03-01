import { Injectable, inject } from '@angular/core';
import { ClientDatasourceImpl } from '../../infrastructure/datasources/client.datasource.impl';
import { Observable, map, of } from 'rxjs';
import { ClientModel, User } from '../../domain/models/client.model';
import { GetClientsDto } from '../../domain/dto/get-clients.dto';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly dataSource: ClientDatasourceImpl =
    inject(ClientDatasourceImpl);

  private client: ClientModel[] = [];

  getAllClients(parameters: GetClientsDto): Observable<ClientModel[]> {
    const mappedClient = this.dataSource.getAllClients(parameters).pipe(
      map((response: ClientModel[]) => {
        if (Array.isArray(response)) {
          this.client = response;
          console.log('🚀 ~ file: client.service.ts ~ line 29 ~ ClientService ~ this.client', this.client);
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

  deleteClient(id: number): Observable<ClientModel[]> {
    //*pop by id
    const newData = this.client.map(item => {
      item.users = item.users.filter(item => item.id === id)
      return item
    });
    console.log('🚀 ~ file: client.service.ts ~ line 58 ~ ClientService ~ newData', newData);
    return of(newData);
  }

  private mapToClientModel(data: ClientModel): ClientModel {
    return data;
  }
}
