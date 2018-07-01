import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbbumListComponent } from './albbum-list.component';

describe('AlbbumListComponent', () => {
  let component: AlbbumListComponent;
  let fixture: ComponentFixture<AlbbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbbumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
