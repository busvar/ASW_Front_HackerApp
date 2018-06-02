import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contribution } from './classes/contribution';


@Injectable({
  providedIn: 'root'
})
export class ContributionService {

	private url = 'https://salty-beyond-71147.herokuapp.com/api';
  private url_test = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  /** GET from the server */
	getContributions () {
	  return this.http.get<Contribution[]>(this.url + "/contributions/new")
	}

	getContribution (id) {
	  return this.http.get<Contribution>(this.url + "/contributions/" + id)
	}

}
