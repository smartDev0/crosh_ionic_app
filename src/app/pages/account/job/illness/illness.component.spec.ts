import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IllnessComponent } from './illness.component';

describe('IllnessComponent', () => {
  let component: IllnessComponent;
  let fixture: ComponentFixture<IllnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllnessComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
