import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';
import { MockStorageService } from "../storage/mock-storage.service";
import { StorageService } from "../storage/storage-service";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/observable/of'
import { Observable } from "rxjs/Observable";

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ContactComponent ],
      providers: [
                    {
                      provide: ActivatedRoute,
                      useValue: {
                        params: Observable.of({id:'steef'})
                      }
                    },
                    {
                      provide: StorageService,
                      useClass: MockStorageService
                    }
                  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('have a name', () => {
    expect(component.contact.name).toEqual('Steef');
  });

});
