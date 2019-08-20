import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../service/api-service';
import { DialogService } from "ng2-bootstrap-modal";
import { RouterModule, Router } from '@angular/router';
import { appRoutes } from '../app-routing.module';
import { ViewTasksComponent } from '../view-tasks/view-tasks.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersComponent } from '../users/users.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { APP_BASE_HREF } from '@angular/common';

describe('ViewTasksComponent', () => {
  let component: ViewTasksComponent;
  let fixture: ComponentFixture<ViewTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTasksComponent, UsersComponent, ProjectsComponent, AddTasksComponent],
      imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
      providers: [ApiService, DialogService, { provide: APP_BASE_HREF, useValue: '/' }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the project label with fixture.debugElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('label'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('Project:');
  });

  it('should project search button click event', async(() => {
    spyOn(component, 'openProjectDialog');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openProjectDialog).toHaveBeenCalled();
    });

  }));

});
