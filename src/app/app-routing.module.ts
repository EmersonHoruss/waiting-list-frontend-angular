import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WaitingListComponent } from './pages/cruds/waiting-list/waiting-list.component';
import { UserComponent } from './pages/cruds/user/user.component';
import { ERoutes } from './data/ERoutes';
import { PatientComponent } from './pages/cruds/patient/patient.component';
import { InsuranceComponent } from './pages/cruds/insurance/insurance.component';

const routes: Routes = [
  { path: ERoutes.root, component: HomeComponent },
  { path: ERoutes.waitingList, component: WaitingListComponent },
  { path: ERoutes.users, component: UserComponent },
  { path: ERoutes.patients, component: PatientComponent },
  { path: ERoutes.insurances, component: InsuranceComponent },
  { path: ERoutes.allOther, redirectTo: ERoutes.root },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
