import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListPage } from './games-list.page';

describe('GamesListPage', () => {
  let component: GamesListPage;
  let fixture: ComponentFixture<GamesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
