import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CroshComponent } from './crosh.component';

describe('CroshComponent', () => {
  let component: CroshComponent;
  let fixture: ComponentFixture<CroshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroshComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CroshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
