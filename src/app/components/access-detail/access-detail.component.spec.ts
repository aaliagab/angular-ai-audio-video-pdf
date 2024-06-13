import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDetailComponent } from './access-detail.component';

describe('AccessDetailComponent', () => {
  let component: AccessDetailComponent;
  let fixture: ComponentFixture<AccessDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessDetailComponent]
    });
    fixture = TestBed.createComponent(AccessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
