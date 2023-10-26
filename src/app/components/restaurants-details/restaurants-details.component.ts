import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.component.html',
  styleUrls: ['./restaurants-details.component.scss']
})
export class RestaurantsDetailsComponent implements OnInit {

  id;
  listItems;
  restDetails
  constructor(private route: ActivatedRoute, private foodService: RestaurantService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.foodService.getFoodItems(this.id).subscribe(
      (res) => {
        console.log(res);
        const arrayItems = res.foodItems;
        this.restDetails = res.restaurant
        this.listItems = arrayItems.map(food => {
          return { ...food, quantity: 0 }
        })
        console.log(this.listItems);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  updateQuantity(type: String, id: string) {
    const findId = this.listItems.find(item => item.id === id);
    if (findId) {
      if (type === 'inc') {
        findId.quantity += 1;
      } else {
        findId.quantity -= 1;
      }

      this.listItems.map(item => {
        if (item.id === id) {
          return { ...item, ...findId }
        } else {
          return { ...item }
        }
      })
      console.log(this.listItems);
    }
  }

  placeOrder() {
    const obj = {
      userId: 3,
      restaurant: this.restDetails,
      items: this.listItems
    }
    console.log(obj);
    this.foodService.createOrder(obj).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
