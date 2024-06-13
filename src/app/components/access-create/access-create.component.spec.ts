import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCreateComponent } from './access-create.component';

describe('AccessCreateComponent', () => {
  let component: AccessCreateComponent;
  let fixture: ComponentFixture<AccessCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessCreateComponent]
    });
    fixture = TestBed.createComponent(AccessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
