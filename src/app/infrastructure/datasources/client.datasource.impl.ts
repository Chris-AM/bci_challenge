import { Observable, of } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientDatasource } from '../../domain/datasources/client.datasource';
import { ClientModel } from '../../domain/models/client.model';
import { environment } from '../../config/environment.config';
import { GetClientsDto } from '../../domain/dto/get-clients.dto';

@Injectable({
  providedIn: 'root',
})
export class ClientDatasourceImpl implements ClientDatasource {
  private readonly baseUrl = environment.expernal_links.base_url;
  private readonly httpClient: HttpClient = inject(HttpClient);

  //* 1 Elige alguna Api: https://dummyjson.com/
  //* Motivo: Puedo obtener diferentes tipos de datos para simular

  //* 4 Necesitamos que tu App tenga la capacidad de ser
  //*   un CRUD que trabaje de forma emporal con la DATA de la API (...)

  getAllClients(parameters: GetClientsDto): Observable<ClientModel[]> {
    const { limit, select, skip, total } = parameters;
    const fetchUrl = `${this.baseUrl}${environment.expernal_links.clients.base_url}`;
    const parametersUrl = `?limit=${limit}&select=${select
      ?.join(',')
      .toString()}&skip=${skip}&total=${total}`;
    const petition = this.httpClient.get<ClientModel[]>(
      `${fetchUrl}${parametersUrl}`
    );
    return petition;
  }
  
  getClientById(id: number): Observable<ClientModel> {
    const petition = this.httpClient.get<ClientModel>(
      `${this.baseUrl}${environment.expernal_links.clients.base_url}/${id}`
    );
    return petition;
  }

  //* 4 (...)  debemos poder eliminar, editar y crear data temporalmente,
  //*          si actualizamos
  //*          el sitio la data debe volver a su estado inicial
  createClient(client: ClientModel): Observable<ClientModel> {
    return of(client);
  }
  updateClient(client: ClientModel): Observable<ClientModel> {
    return of(client);
  }
  deleteClient(id: number): Observable<boolean> {
    return of(true);
  }
}
