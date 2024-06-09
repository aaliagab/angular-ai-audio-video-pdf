import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDetailComponent } from './source-detail.component';

describe('SourceDetailComponent', () => {
  let component: SourceDetailComponent;
  let fixture: ComponentFixture<SourceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceDetailComponent]
    });
    fixture = TestBed.createComponent(SourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
