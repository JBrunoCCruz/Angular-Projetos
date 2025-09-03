import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAlternaComponent } from './botao-alterna.component';

describe('BotaoAlternaComponent', () => {
  let component: BotaoAlternaComponent;
  let fixture: ComponentFixture<BotaoAlternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoAlternaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoAlternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
