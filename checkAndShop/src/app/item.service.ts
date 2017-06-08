import { Injectable } from '@angular/core';
import { Item } from './item';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { AngularFire } from "angularfire2";


@Injectable()
export class ItemService {
	private basePath: string = '/src';
	items: FirebaseListObservable<any[]> = null;
	item: FirebaseListObservable<any[]> = null;
  constructor(private af: AngularFire,
              private db: AngularFireDatabase) { }
	getItemsList(query={}): FirebaseListObservable {
    this.items = this.db.list(this.basePath, {
      query: query
    });
    return this.items
  }
  // Return a single observable item
  getItem(name: any): FirebaseObjectObservable {
    const itemPath =  `${this.basePath}/${name}`;
    this.item = this.db.object(itemPath)
    return this.item
  } 		  

}
