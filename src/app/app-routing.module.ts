import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'patron',
    loadChildren: () => import('./patron/patron.module').then( m => m.PatronPageModule)
  },
  {
    path: 'autenticacion-renap',
    loadChildren: () => import('./autenticacion-renap/autenticacion-renap.module').then( m => m.AutenticacionRenapPageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./chatbot/chatbot/chatbot.module').then( m => m.ChatbotPageModule )
  },
  {
    path: 'chatbot-old',
    loadChildren: () => import('./chatbot-old/chatbot/chatbot.module').then( m => m.ChatbotPageModule )
  },
  {
    path: 'speech-recognition',
    loadChildren: () => import('./speech-recognition/speech-recognition.module').then( m => m.SpeechRecognitionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
