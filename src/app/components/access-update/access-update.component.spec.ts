import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUpdateComponent } from './access-update.component';

describe('AccessUpdateComponent', () => {
  let component: AccessUpdateComponent;
  let fixture: ComponentFixture<AccessUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessUpdateComponent]
    });
    fixture = TestBed.createComponent(AccessUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
