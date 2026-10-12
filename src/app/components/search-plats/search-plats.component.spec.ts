import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlatsComponent } from './search-plats.component';

describe('SearchPlatsComponent', () => {
  let component: SearchPlatsComponent;
  let fixture: ComponentFixture<SearchPlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPlatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
