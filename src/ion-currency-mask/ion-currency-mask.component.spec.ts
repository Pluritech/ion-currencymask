import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { IonCurrencyMaskComponent } from './ion-currency-mask.component';

describe('SampleComponent', () => {

  let comp:    IonCurrencyMaskComponent;
  let fixture: ComponentFixture<IonCurrencyMaskComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCurrencyMaskComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(IonCurrencyMaskComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });
});
