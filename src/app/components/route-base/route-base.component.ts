import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Subscription } from 'rxjs';
import { Award } from 'src/app/modules/awards/award/award.model';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

interface Item {
  type?: string;
  title: string;
  subtitle: string;
  year?: number;
  date?: any;
  publisherLink?: string;
  reference?: any;
  student?: string;
  department?: string;
  school?: string;
  role?: string;
}

export class RouteBaseComponent implements OnInit, OnDestroy {
  tabs: string[] = [];
  items: Item[];
  subscription: Subscription;
  loading: boolean = true;

  constructor(public database: FirestoreService, public seo: SeoService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initSEO(title: string, description: string): void {
    this.seo.generateTags({ title, description });
  }

  initData(collection: string): void {
    this.subscription = this.database
      .getItems(collection)
      .valueChanges()
      .subscribe((res: any[]) => {
        this.items = res;
        this.loading = false;
        this.items.forEach((item: any) => {
          if (item.type && this.tabs.indexOf(item.type) === -1) {
            this.tabs.push(item.type);
          }
        });
      });
  }

  getItemsByTab(tab: string) {
    return this.items.filter((item: Item) => {
      if (item.type) {
        return item.type.toLowerCase() === tab.toLowerCase();
      }
    });
  }

  getCountByTab(tab: string): number {
    return this.items.filter(
      (item: Item) => item.type.toLowerCase() === tab.toLowerCase()
    ).length;
  }
}
