import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { SeoService } from 'src/app/services/seo/seo.service';
import { CollectionItem } from './collection-item.model';

export class CollectionBaseComponent implements OnInit, OnDestroy {
  tabs: string[] = [];
  items: CollectionItem[];
  subscription: Subscription;
  loading: boolean;

  constructor(private database: FirestoreService, private seo: SeoService) {}

  ngOnInit() {
    this.loading = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initSEO(title: string, description: string): void {
    this.seo.generateTags({ title, description });
  }

  fetchCollection(collection: string): void {
    this.subscription = this.database
      .getCollection(collection)
      .valueChanges()
      .subscribe((res: CollectionItem[]): void => {
        this.items = res;
        this.loading = false;
        this.items.forEach((item: CollectionItem) => {
          if (item && item.type) {
            if (this.tabs.indexOf(item.type) === -1) {
              this.tabs.push(item.type);
            }
          }
        });
      });
  }

  getItemsByTab(tab: string): CollectionItem[] {
    return this.items.filter((item: CollectionItem) => {
      if (item.type) {
        return item.type.toLowerCase() === tab.toLowerCase();
      }
    });
  }

  getCountByTab(tab: string): number {
    return this.items.filter(
      (item: CollectionItem) => item.type.toLowerCase() === tab.toLowerCase()
    ).length;
  }
}
