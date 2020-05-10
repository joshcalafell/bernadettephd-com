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
    path: 'awards-and-honors',
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
    path: 'teaching-and-mentoring',
    loadChildren: () =>
      import('./modules/mentoring/mentoring.module').then(
        m => m.MentoringModule
      )
  },
  {
    path: 'media-commentary',
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
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./core/login/login.module').then(m => m.LoginModule),
  // },
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
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
