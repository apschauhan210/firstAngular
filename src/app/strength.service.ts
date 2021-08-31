import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrengthService {

  constructor(private http: HttpClient) { }

  getStrength() {
    return this.http.get<{section: string, strength: number}[]>('/assets/strength.json');
  }
}
