import { Injectable, inject } from '@angular/core';
import { ClientDatasourceImpl } from '../../infrastructure/datasources/client.datasource.impl';
import { Observable } from 'rxjs';
import { ClientModel } from '../../domain/models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly dataSource: ClientDatasourceImpl =
    inject(ClientDatasourceImpl);
  
  getAllClients(): Observable<ClientModel[]> {
    return this.dataSource.getAllClients();
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
}
