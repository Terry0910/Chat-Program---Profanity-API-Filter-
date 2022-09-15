import { TestBed } from '@angular/core/testing';

import { MsgApiService } from './msg-api.service';

describe('MsgApiService', () => {
  let service: MsgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
