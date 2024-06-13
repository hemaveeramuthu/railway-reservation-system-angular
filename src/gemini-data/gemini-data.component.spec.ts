import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiDataComponent } from './gemini-data.component';

describe('GeminiDataComponent', () => {
  let component: GeminiDataComponent;
  let fixture: ComponentFixture<GeminiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeminiDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeminiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
