import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Contribution } from './classes/contribution';


@Injectable({
  providedIn: 'root'
})
export class ContributionService {

	private url = 'https://salty-beyond-71147.herokuapp.com/api';
  private url_test = "https://jsonplaceholder.typicode.com/posts";
  // ATENCION CAMBIAR EL 4 SEGUN EL USUARIO!  
  private url_create_url = "https://salty-beyond-71147.herokuapp.com/api/users/4/contributions/url";
  private url_create_ask = "https://salty-beyond-71147.herokuapp.com/api/users/4/contributions/ask";
  constructor(private http: HttpClient) { }

  /** GET from the server */
	getContributions () {
	  return this.http.get<Contribution[]>(this.url + "/contributions/new")
	}

	getContribution (id) {
	  return this.http.get<Contribution>(this.url + "/contributions/" + id)
	}

	create_ask(){

		const httpOptions = {
    		headers: new HttpHeaders({ 
    			'X-API-KEY': 'c577e27ed69be9fd4d378b2a7ab86227',
    			'Content-Type':  'application/json'})
		};
		let params  = new HttpParams().set('title','testing-angular');
		let params2  = new HttpParams().set('text','txt---angular');
		// ATENCION, CAMBIAR title i text por valores del form
		return this.http.post<Contribution>(this.url_create_ask, { "title": 'dfgf', "text": 'nininn'}, httpOptions).subscribe(res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
	}

	create_url(){
		const httpOptions = {
    		headers: new HttpHeaders({ 
    			'X-API-KEY': 'c577e27ed69be9fd4d378b2a7ab86227',
    			'Content-Type':  'application/json'})
		};
		let params  = new HttpParams().set('title','testing-angular');
		let params2  = new HttpParams().set('text','txt---angular');
		return this.http.post<Contribution>(this.url_create_url, { "title": 'dfgf', "url": 'www.pepito.com'}, httpOptions).subscribe(res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
	}

}
