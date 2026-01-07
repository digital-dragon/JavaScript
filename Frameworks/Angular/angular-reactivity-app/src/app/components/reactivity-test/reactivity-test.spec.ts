import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivityTest } from './reactivity-test';

describe('ReactivityTest', () => {
  let component: ReactivityTest;
  let fixture: ComponentFixture<ReactivityTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivityTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivityTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
