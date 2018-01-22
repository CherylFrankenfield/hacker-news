import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { SubmitComponent } from './submit/submit.component';
import { AskComponent } from './ask/ask.component';
import { CommentsComponent } from './comments/comments.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'jobs',
    component: JobsComponent
  },
  { path: 'new',
    component: NewComponent
  },
  { path: 'show',
    component: ShowComponent
  },
  { path: 'submit',
    component: SubmitComponent
  },
  { path: 'ask',
    component: AskComponent
  },
  { path: 'comments',
    component: CommentsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
