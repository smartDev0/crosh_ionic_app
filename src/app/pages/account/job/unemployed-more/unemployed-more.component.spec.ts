import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnemployedMoreComponent } from './unemployed-more.component';

describe('UnemployedMoreComponent', () => {
  let component: UnemployedMoreComponent;
  let fixture: ComponentFixture<UnemployedMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnemployedMoreComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnemployedMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
