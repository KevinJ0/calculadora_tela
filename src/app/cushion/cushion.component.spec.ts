import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CushionComponent } from './cushion.component';

describe('CushionComponent', () => {
  let component: CushionComponent;
  let fixture: ComponentFixture<CushionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CushionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CushionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
