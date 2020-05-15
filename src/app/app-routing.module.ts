import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  {
    path: 'about',
    loadChildren: async () => {
      const m = await import('./modules/about/about.module');
      return m.AboutModule;
    }
  },
  {
    path: 'advisees',
    loadChildren: async () => {
      const m = await import('./modules/advisees/advisees.module');
      return m.AdviseesModule;
    }
  },
  {
    path: 'awards',
    loadChildren: async () => {
      const m = await import('./modules/awards/awards.module');
      return m.AwardsModule;
    }
  },
  {
    path: 'books',
    loadChildren: async () => {
      const m = await import('./modules/books/books.module');
      return m.BooksModule;
    }
  },
  {
    path: 'commentary',
    loadChildren: async () => {
      const m = await import('./modules/commentaries/commentaries.module');
      return m.CommentariesModule;
    }
  },
  {
    path: 'presentations',
    loadChildren: async () => {
      const m = await import('./modules/presentations/presentations.module');
      return m.PresentationsModule;
    }
  },
  {
    path: 'philosophy',
    loadChildren: async () => {
      const m = await import('./modules/philosophy/philosophy.module');
      return m.PhilosophyModule;
    }
  },
  {
    path: 'publications',
    loadChildren: async () => {
      const m = await import('./modules/publications/publications.module');
      return m.PublicationsModule;
    }
  },
  {
    path: 'research',
    loadChildren: async () => {
      const m = await import('./modules/research/research.module');
      return m.ResearchModule;
    }
  },
  {
    path: '404',
    loadChildren: async () => {
      const m = await import('./modules/not-found/not-found.module');
      return m.NotFoundModule;
    }
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
