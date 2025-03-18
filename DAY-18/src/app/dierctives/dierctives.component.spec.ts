import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DierctivesComponent } from './dierctives.component';

describe('DierctivesComponent', () => {
  let component: DierctivesComponent;
  let fixture: ComponentFixture<DierctivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DierctivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DierctivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
