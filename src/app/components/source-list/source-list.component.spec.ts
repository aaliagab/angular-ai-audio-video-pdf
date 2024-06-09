import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceListComponent } from './source-list.component';

describe('SourceListComponent', () => {
  let component: SourceListComponent;
  let fixture: ComponentFixture<SourceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceListComponent]
    });
    fixture = TestBed.createComponent(SourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
