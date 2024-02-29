import { Observable } from "rxjs";
import { HomeModel } from "../models/home.model";

export abstract class HomeDatasource {
  abstract getHomeData(): Observable<HomeModel[]>;
}