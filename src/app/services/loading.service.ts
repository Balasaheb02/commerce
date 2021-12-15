import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
