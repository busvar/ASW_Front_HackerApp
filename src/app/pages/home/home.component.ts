import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../contribution.service';
import { Contribution } from './../../classes/contribution';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	contributions: Observable<Contribution[]>;

  constructor(private contributionService: ContributionService) { }

  ngOnInit() {
  	this.contributionService.getContributions().
	  subscribe(data => {
	  	this.contributions = data.data;
	  });
  }

  create_ask(){
  	console.log(this.contributionService.create_ask())
  }

  create_url(){
  	console.log(this.contributionService.create_url())
  }

  upvoteContribution(id){
    console.log(this.contributionService.upvoteContribution(id))
  }

  unvoteContribution(id){
    console.log(this.contributionService.unvoteContribution(id))
  }

}
