import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule,
        HttpClientModule
      ],
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dataSource should be initialized with default values', () => {
    expect(
      (component.dataSource = [
        {
          fullName: 'nose',
          birthDate: 'cacasaca',
          sex: '59kg',
          phone: '',
          country: 'ccc',
          lastModification: '',
        },
      ])
    ).toBeTruthy();
  });
});
