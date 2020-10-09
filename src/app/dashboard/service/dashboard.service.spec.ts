import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [DashboardService]
  }));

   it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
   });

   it('should have getLaunches function', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service.getLaunches).toBeTruthy();
   });

});