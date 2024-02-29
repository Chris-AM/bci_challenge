import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCodeComponent } from './get-code.component';

describe('GetCodeComponent', () => {
  let component: GetCodeComponent;
  let fixture: ComponentFixture<GetCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
