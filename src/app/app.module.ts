import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModifyTaskComponent } from './modify-task/modify-task.component';
@NgModule({
  declarations: [AppComponent, TaskComponent, ModifyTaskComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
