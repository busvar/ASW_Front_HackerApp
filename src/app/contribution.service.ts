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

  getContributionsAsk () {
    return this.http.get<Contribution[]>(this.url + "/contributions/ask")
  }

	getContribution (id) {
	  return this.http.get<Contribution>(this.url + "/contributions/" + id)
	}

  getLogin () {
    return this.http.get<any>(this.url + "/auth/gmail/callback").subscribe(res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }

  upvoteContribution (id, callback) {

  const httpOptions = {
        headers: new HttpHeaders({ 
          'X-API-KEY': ' ba0892f4ca6109257ed2e7160ce6eaa3',
          'Content-Type':  'application/json'})
    };

    return this.http.put<any>(this.url + "/users/1/contributions/" + id + "/upvote",{}, httpOptions).subscribe(res => {
          console.log(res);
          callback()
        },
        err => {
          console.log(err);
          callback()
        });
  }
  

  unvoteContribution (id, callback) {
  const httpOptions = {
        headers: new HttpHeaders({ 
          'X-API-KEY': ' ba0892f4ca6109257ed2e7160ce6eaa3',
          'Content-Type':  'application/json'})
    };
    return this.http.put(this.url + "/users/1/contributions/" + id + "/unvote", {}, httpOptions).subscribe(res => {
          console.log(res);
          callback();
        },
        err => {
          console.log(err);
          callback();
        });
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

  getUser (id) {
    return this.http.get<Contribution>(this.url + "/users/" + id);
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
