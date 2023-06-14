import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlSelectComponent } from './mysql-select.component';

describe('MysqlSelectComponent', () => {
  let component: MysqlSelectComponent;
  let fixture: ComponentFixture<MysqlSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysqlSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
