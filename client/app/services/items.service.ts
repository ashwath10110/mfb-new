import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  isLoading = false;

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  products=[];

  state = {
    'isInitialised': false,
    'data': {
      'exotic-vegetables': {
        'items': []
      },
      'leafy-green-vegetables': {
        'items': []
      },
      'fresh-fruits': {
        'items': []
      },
      'fresh-vegetables': {
        'items': []
      }
    }
  };

  constructor(private http: Http) {
    // this.getItems_();
  }

  processItems(items) {
    for (var i = 0; i < items.length; i++) {
      var currentItem = items[i];
      var type = currentItem.type;
      this.state.data[type].push(currentItem);
    }
  }

  getItems(): Observable<any> {
    return this.http.get('/api/items').map(res => res.json());
  }

  getItemsByType(type): Observable<any> {
    return this.http.get('/api/items/' + type).map(res => res.json());
  }

  getLeafyGreenVegetables(): Observable<any> {
    return this.http.get('/api/items').map(res => res.json());
  }

  countLeafyGreenVegetables(): Observable<any> {
    return this.http.get('/api/items/count').map(res => res.json());
  }

  addLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    return this.http.post('/api/items', JSON.stringify(leafyGreenVegetables), this.options);
  }

  getLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    return this.http.get(`/api/items/${leafyGreenVegetables._id}`).map(res => res.json());
  }

  editLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    debugger;
    return this.http.put(`/api/items/${leafyGreenVegetables._id}`, JSON.stringify(leafyGreenVegetables), this.options);
  }

  deleteLeafyGreenVegetable(leafyGreenVegetables): Observable<any> {
    return this.http.delete(`/api/items/${leafyGreenVegetables._id}`, this.options);
  }

}