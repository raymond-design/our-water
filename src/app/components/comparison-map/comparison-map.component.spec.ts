import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonMapComponent } from './comparison-map.component';

describe('ComparisonMapComponent', () => {
  let component: ComparisonMapComponent;
  let fixture: ComponentFixture<ComparisonMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
