import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../contribution.service';
import { Contribution } from './../../classes/contribution';
import { Observable } from 'rxjs/Observable';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {


  contribution: Observable<Contribution>;
  id: string;

  constructor(private contributionService: ContributionService, private activatedRoute: ActivatedRoute) { 
  	this.activatedRoute.params.subscribe(params => {
  	      this.id = params['id'];
  	      console.log(this.id); // Print the parameter to the console. 
  	  });
    }


  ngOnInit() {
  this.contributionService.getContribution(this.id).
	  subscribe(data => {
	  	this.contribution = data['data'];;
	  });
  }

  upvoteContribution(id) {
    this.contributionService.upvoteContribution(id, function (callback) {
      window.location.reload();
    })
    
  }

  unvoteContribution(id){
    this.contributionService.unvoteContribution(id, function (callback) {
      window.location.reload();
    })
  }

}
