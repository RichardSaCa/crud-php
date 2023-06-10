import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRocketComponent } from './create-rocket.component';

describe('CreateRocketComponent', () => {
  let component: CreateRocketComponent;
  let fixture: ComponentFixture<CreateRocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRocketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
