import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatCardModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatSelectModule,
  MatAutocompleteModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainPageComponent } from './components/shared/main-page/main-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Step1Component } from './components/sign-up/step1/step1.component';
import { Step2Component } from './components/sign-up/step2/step2.component';
import { Step3Component } from './components/sign-up/step3/step3.component';
import { Step4Component } from './components/sign-up/step4/step4.component';
import { Step5Component } from './components/create-portfolio/step5/step5.component';
import { Step6Component } from './components/create-portfolio/step6/step6.component';
import { Step7Component } from './components/create-portfolio/step7/step7.component';
import { CreatePortfolioComponent } from './components/create-portfolio/create-portfolio.component';
import { Step8Component } from './components/create-portfolio/step8/step8.component';
import { Step9Component } from './components/create-portfolio/step9/step9.component';
import { Step10Component } from './components/create-portfolio/step10/step10.component';
import { Step11Component } from './components/create-portfolio/step11/step11.component';
import { Step12Component } from './components/create-portfolio/step12/step12.component';
import { Step13Component } from './components/create-portfolio/step13/step13.component';
import { Step14Component } from './components/create-portfolio/step14/step14.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { PortfolioComponent } from './components/dash-board/portfolio/portfolio.component';
import { TrackSavingsComponent } from './components/dash-board/track-savings/track-savings.component';
import { ProfileComponent } from './components/dash-board/profile/profile.component';
import { MarketNewsComponent } from './components/dash-board/market-news/market-news.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/dash-board/track-savings/overview/overview.component';
import { ProgressComponent } from './components/dash-board/track-savings/progress/progress.component';
import { TopUpComponent } from './components/dash-board/track-savings/top-up/top-up.component';
import { CreateAccountComponent } from './components/sign-up/create-account/create-account.component';
import { VerifyAccountComponent } from './components/sign-up/verify-account/verify-account.component';
import { DevTestComponent } from './components/dev-test/dev-test.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    Step1Component,
    Step2Component,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    CreatePortfolioComponent,
    Step8Component,
    Step9Component,
    Step10Component,
    Step11Component,
    Step12Component,
    Step13Component,
    Step14Component,
    DashBoardComponent,
    PortfolioComponent,
    TrackSavingsComponent,
    ProfileComponent,
    MarketNewsComponent,
    LoginComponent,
    OverviewComponent,
    ProgressComponent,
    TopUpComponent,
    CreateAccountComponent,
    VerifyAccountComponent,
    DevTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgbModule,
    NguCarouselModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
