import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './../app/components/sign-up/sign-up.component';
import { LoginComponent } from './../app/components/login/login.component';
import { CreateAccountComponent } from './../app/components/sign-up/create-account/create-account.component';
import { VerifyAccountComponent } from './../app/components/sign-up/verify-account/verify-account.component';
import { Step1Component } from './../app/components/sign-up/step1/step1.component';
import { Step2Component } from './../app/components/sign-up/step2/step2.component';
import { Step3Component } from './../app/components/sign-up/step3/step3.component';
import { Step4Component } from './../app/components/sign-up/step4/step4.component';
import { Step5Component } from './../app/components/create-portfolio/step5/step5.component';
import { Step6Component } from './../app/components/create-portfolio/step6/step6.component';
import { Step7Component } from './../app/components/create-portfolio/step7/step7.component';
import { Step8Component } from './../app/components/create-portfolio/step8/step8.component';
import { Step9Component } from './../app/components/create-portfolio/step9/step9.component';
import { Step10Component } from './../app/components/create-portfolio/step10/step10.component';
import { Step11Component } from './../app/components/create-portfolio/step11/step11.component';
import { Step12Component } from './../app/components/create-portfolio/step12/step12.component';
import { Step13Component } from './../app/components/create-portfolio/step13/step13.component';
import { Step14Component } from './../app/components/create-portfolio/step14/step14.component';
import { DashBoardComponent } from './../app/components/dash-board/dash-board.component';
import { MarketNewsComponent } from './../app/components/dash-board/market-news/market-news.component';
import { PortfolioComponent } from './../app/components/dash-board/portfolio/portfolio.component';
import { TrackSavingsComponent } from './../app/components/dash-board/track-savings/track-savings.component';
import { OverviewComponent } from './../app/components/dash-board/track-savings/overview/overview.component';
import { ProgressComponent } from './../app/components/dash-board/track-savings/progress/progress.component';
import { TopUpComponent } from './../app/components/dash-board/track-savings/top-up/top-up.component';
import { ProfileComponent } from './../app/components/dash-board/profile/profile.component';
import { DevTestComponent } from './../app/components/dev-test/dev-test.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent, data: { animation: 'signup' } },
  { path: 'create-account', component: CreateAccountComponent, data: { animation: 'createaccount' } },
  { path: 'verify-account', component: VerifyAccountComponent, data: { animation: 'verifyaccount' } },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'step1', component: Step1Component, data: { animation: 'step1' }},
  { path: 'step2', component: Step2Component, data: { animation: 'step2' }},
  { path: 'step3', component: Step3Component, data: { animation: 'step3' }},
  { path: 'step4', component: Step4Component, data: { animation: 'step4' }},
  { path: 'step5', component: Step5Component, data: { animation: 'step5' }},
  { path: 'step6', component: Step6Component, data: { animation: 'step6' }},
  { path: 'step7', component: Step7Component, data: { animation: 'step7' }},
  { path: 'step8', component: Step8Component, data: { animation: 'step8' }},
  { path: 'step9', component: Step9Component, data: { animation: 'step9' }},
  { path: 'step10', component: Step10Component, data: { animation: 'step10' }},
  { path: 'step11', component: Step11Component, data: { animation: 'step11' }},
  { path: 'step12', component: Step12Component, data: { animation: 'step12' }},
  { path: 'step13', component: Step13Component, data: { animation: 'step13' }},
  { path: 'step14', component: Step14Component, data: { animation: 'step14' }},
  { path: 'dash-board',
    component: DashBoardComponent,
    data: { animation: 'dash-board' },
    children: [
      // {path: '', redirectTo: 'dash-board/portfolio', pathMatch: 'full'},
      {path: 'market-news', component: MarketNewsComponent, data: { animation: 'market-news' }},
      {path: 'portfolio', component: PortfolioComponent, data: { animation: 'portfolio' }},
      { path: 'track-savings',
        component: TrackSavingsComponent,
        data: { animation: 'track-savings' },
        children: [
          // {path: '', redirectTo: 'dash-board/portfolio', pathMatch: 'full'},
          {path: 'overview', component: OverviewComponent, data: { animation: 'overview' }},
          {path: 'progress', component: ProgressComponent, data: { animation: 'progress' }},
          {path: 'top-up', component: TopUpComponent, data: { animation: 'top-up' }},
        ]
      },
      {path: 'profile', component: ProfileComponent, data: { animation: 'profile' }},
    ]
  },
  { path: 'dev-test', component: DevTestComponent, data: { animation: 'dev-test' }},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
