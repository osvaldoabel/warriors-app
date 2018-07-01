import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbbumCreateComponent } from './albbum-create.component';

describe('AlbbumCreateComponent', () => {
  let component: AlbbumCreateComponent;
  let fixture: ComponentFixture<AlbbumCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbbumCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbbumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
