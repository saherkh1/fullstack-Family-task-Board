import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/tasks-area/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-area/tasks-list/tasks-list.component';

const routes: Routes = [
    { path: "tasks", component: TasksListComponent },
    { path: "new-task", component: AddTaskComponent },
    { path: "**", redirectTo: "tasks", pathMatch: "full" }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
