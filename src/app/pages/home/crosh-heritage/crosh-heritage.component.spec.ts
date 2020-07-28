import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CroshHeritageComponent } from './crosh-heritage.component';

describe('CroshHeritageComponent', () => {
  let component: CroshHeritageComponent;
  let fixture: ComponentFixture<CroshHeritageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroshHeritageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CroshHeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
