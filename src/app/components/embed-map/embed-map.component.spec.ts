import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedMapComponent } from './embed-map.component';

describe('EmbedMapComponent', () => {
  let component: EmbedMapComponent;
  let fixture: ComponentFixture<EmbedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
