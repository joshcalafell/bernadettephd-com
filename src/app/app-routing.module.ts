import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'research',
    loadChildren: () =>
      import('./modules/research/research.module').then(m => m.ResearchModule)
  },
  {
    path: 'awards',
    loadChildren: () =>
      import('./modules/awards/awards.module').then(m => m.AwardsModule)
  },
  {
    path: 'publications',
    loadChildren: () =>
      import('./modules/publications/publications.module').then(
        m => m.PublicationsModule
      )
  },
  {
    path: 'advisees',
    loadChildren: () =>
      import('./modules/advisees/advisees.module').then(m => m.AdviseesModule)
  },
  {
    path: 'commentary',
    loadChildren: () =>
      import('./modules/commentaries/commentaries.module').then(
        m => m.CommentariesModule
      )
  },
  {
    path: 'presentations',
    loadChildren: () =>
      import('./modules/presentations/presentations.module').then(
        m => m.PresentationsModule
      )
  },
  {
    path: '404',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'philosophy',
    loadChildren: () =>
      import('./modules/philosophy/philosophy.module').then(
        m => m.PhilosophyModule
      )
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
