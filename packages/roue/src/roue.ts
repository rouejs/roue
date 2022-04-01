import { Observable } from "./observable";

export class Roue {
  static create<T = unknown>(input: T): Observable<T> {
    return new Observable(input);
  }
  constructor() {}
}
