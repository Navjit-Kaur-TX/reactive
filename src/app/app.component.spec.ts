import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { Location } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { By } from '@angular/platform-browser';
import { HoverFocusDirectiveDirective } from './hover-focus-directive.directive';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// fdescribe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       //declarations: [ AppComponent, HomeComponent, DescriptionComponent ],
//   declarations: [AppComponent, HomeComponent, DescriptionComponent],
//   imports: [RouterModule, 
//     RouterTestingModule.withRoutes(routes)
//   ],
//       // providers: [
//       //   {
//       //     provide: Router, useValue: routerSpy
//       //   }
//       // ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should navigate to the details page', () => {      
//     // component.showDetails();
//     const navArgs = routerSpy.navigateByUrl.calls.first().args[0];
//     expect(navArgs).toEqual("/");
//   });



//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });



//   // it(`should have as title 'reactive'`, () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.componentInstance;
//   //   expect(app.title).toEqual('reactive');
//   // });

//   // it('navigate to "" redirects you to /home', fakeAsync(() => {
//   //   router.navigate(['']);
//   //   tick();
//   //   expect(location.path()).toBe('/home');
//   // }));
// });

fdescribe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),    FormsModule,
        ReactiveFormsModule,
        NgbModule ],
      declarations: [AppComponent, HomeComponent, DescriptionComponent, HoverFocusDirectiveDirective],
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/");
    });
  }));

  it('navigate to "templateDriven" takes you to /templateDriven', fakeAsync(() => {
    router.navigate(["templateDriven"]).then(() => {
      expect(location.path()).toBe("/templateDriven");
    });
  }));

  it('navigate to "reactiveForms" takes you to /reactiveForms', fakeAsync(() => {
    router.navigate(["reactiveForms"]).then(() => {
      expect(location.path()).toBe("/reactiveForms");
    });
  }));


  it('hovering over input directives', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    console.log(inputEl.nativeElement.style.backgroundColor);
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});