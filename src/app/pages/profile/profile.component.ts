import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ContributionService } from '../../contribution.service';
import { User } from './../../classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Observable<User>;
  id: string;

  constructor(private contributionService: ContributionService, private activatedRoute: ActivatedRoute) { 
  	this.activatedRoute.params.subscribe(params => {
  	      this.id = params['id'];
  	      console.log(this.id); // Print the parameter to the console. 
  	  });
    }


  ngOnInit() {
  this.contributionService.getUser(this.id).
	  subscribe(data => {
	  console.log(data['data']);
	  	this.profile = data['data'][0];
	  });
  }

}
