import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WijzigGebruikerPage } from './wijzig-gebruiker.page';

describe('WijzigGebruikerPage', () => {
  let component: WijzigGebruikerPage;
  let fixture: ComponentFixture<WijzigGebruikerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WijzigGebruikerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WijzigGebruikerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
