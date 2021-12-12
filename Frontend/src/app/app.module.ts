import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from './components/tasks-area/task-card/task-card.component';
import { TasksListComponent } from './components/tasks-area/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/tasks-area/add-task/add-task.component';

@NgModule({
    declarations: [
        LayoutComponent,
        TasksListComponent,
        AddTaskComponent,
        TaskCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [LayoutComponent] //first coponent loaded
})
export class AppModule { }
