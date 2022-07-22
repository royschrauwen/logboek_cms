import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NieuweGebruikerPage } from './nieuwe-gebruiker.page';

describe('NieuweGebruikerPage', () => {
  let component: NieuweGebruikerPage;
  let fixture: ComponentFixture<NieuweGebruikerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuweGebruikerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NieuweGebruikerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
