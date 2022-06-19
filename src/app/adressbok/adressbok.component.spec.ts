import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdressbokComponent } from './adressbok.component';

describe('AdressbokComponent', () => {
  let component: AdressbokComponent;
  let fixture: ComponentFixture<AdressbokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressbokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressbokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
