import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CroshSecrurityComponent } from './crosh-secrurity.component';

describe('CroshSecrurityComponent', () => {
  let component: CroshSecrurityComponent;
  let fixture: ComponentFixture<CroshSecrurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroshSecrurityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CroshSecrurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
