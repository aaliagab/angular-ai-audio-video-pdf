import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCreateComponent } from './source-create.component';

describe('SourceCreateComponent', () => {
  let component: SourceCreateComponent;
  let fixture: ComponentFixture<SourceCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceCreateComponent]
    });
    fixture = TestBed.createComponent(SourceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
