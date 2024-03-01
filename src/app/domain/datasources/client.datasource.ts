import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';
import { GetClientsDto } from '../dto/get-clients.dto';

export abstract class ClientDatasource {
  abstract getAllClients(parameters: GetClientsDto): Observable<ClientModel[]>;
  abstract getClientById(id: number): Observable<ClientModel>;
  abstract createClient(client: ClientModel): Observable<ClientModel>;
  abstract updateClient(client: ClientModel): Observable<ClientModel>;
  abstract deleteClient(id: number): Observable<boolean>;
}
