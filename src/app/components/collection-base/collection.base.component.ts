import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { SeoService } from 'src/app/services/seo/seo.service';
import { CollectionItem } from './collection-item.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';

export class CollectionBaseComponent implements OnInit, OnDestroy {
  public tabs: string[] = [];
  public items: CollectionItem[];
  public subscription: Subscription;
  public loading: boolean;

  constructor(
    public auth: AngularFireAuth,
    public dialog: MatDialog,
    private database: FirestoreService,
    private seo: SeoService
  ) {}

  public ngOnInit() {
    this.loading = true;
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public initSEO(title: string, description: string): void {
    this.seo.generateTags({ title, description });
  }

  public fetchCollection(collection: string): void {
    this.subscription = this.database
      .getCollection(collection)
      .valueChanges()
      .subscribe((res: CollectionItem[]): void => {
        this.items = res;
        this.loading = false;
        this.items.forEach((item: any) => {
          if (item && item.type) {
            if (this.tabs.indexOf(item.type) === -1) {
              this.tabs.push(item.type);
            }
          }
        });
      });
  }

  public getItemsByTab(tab: string): CollectionItem[] {
    return this.items.filter((item: CollectionItem) => {
      if (item.type) {
        return item.type.toLowerCase() === tab.toLowerCase();
      }
    });
  }

  public getCountByTab(tab: string): number {
    return this.items.filter(
      (item: CollectionItem) => item.type.toLowerCase() === tab.toLowerCase()
    ).length;
  }
}
