import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from "@angular/forms";
import { provideHttpClient} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExampleComponent } from './example/example.component';
import { CounterComponent } from './counter/counter.component';
import { DierctivesComponent } from './dierctives/dierctives.component';
import { HighlightDirective } from './highlight.directive';
import { PipesComponent } from './pipes/pipes.component';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HomeComponent,
    AboutComponent,
    ExampleComponent,
    CounterComponent,
    DierctivesComponent,
    PipesComponent,
    PipesPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HighlightDirective
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
