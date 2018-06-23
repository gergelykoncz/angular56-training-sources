import { Injectable } from '@angular/core';

@Injectable()
export class IncrementService {
  public counter = 0;

  constructor() {
    this.counter++;
  }
}
