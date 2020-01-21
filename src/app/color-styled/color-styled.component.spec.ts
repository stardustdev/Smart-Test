import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorStyledComponent } from './color-styled.component';

describe('ColorStyledComponent', () => {
  let component: ColorStyledComponent;
  let fixture: ComponentFixture<ColorStyledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorStyledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
