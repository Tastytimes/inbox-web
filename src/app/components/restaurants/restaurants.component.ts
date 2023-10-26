import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  list = [];
  constructor(private restService: RestaurantService) { }

  ngOnInit(): void {
    this.restService.getAllRest().subscribe(
      (res: any) => {
        console.log(res);
        this.list = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
