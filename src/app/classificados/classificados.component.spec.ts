import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificadosComponent } from './classificados.component';

describe('ClassificadosComponent', () => {
  let component: ClassificadosComponent;
  let fixture: ComponentFixture<ClassificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
