import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAllRest() {
    return this.http.get(environment.api_rl + '/all-restaurants')
  }

  getFoodItems(id: string) {
    const options = {
      params: new HttpParams().set('restaurantId', id)
    }
    return this.http.get<any>(environment.api_food + 'get-food-items', options)
  }

  createOrder(obj) {
    return this.http.post(environment.api_order + '/create', obj);
  }

}
