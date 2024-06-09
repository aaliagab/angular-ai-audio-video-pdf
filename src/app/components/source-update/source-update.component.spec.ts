import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceUpdateComponent } from './source-update.component';

describe('SourceUpdateComponent', () => {
  let component: SourceUpdateComponent;
  let fixture: ComponentFixture<SourceUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceUpdateComponent]
    });
    fixture = TestBed.createComponent(SourceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
