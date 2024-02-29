import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';

export abstract class ClientDatasource {
  abstract getAllClients(): Observable<ClientModel[]>;
  abstract getClientById(id: number): Observable<ClientModel>;
  abstract createClient(client: ClientModel): Observable<ClientModel>;
  abstract updateClient(client: ClientModel): Observable<ClientModel>;
  abstract deleteClient(id: number): Observable<boolean>;
}
