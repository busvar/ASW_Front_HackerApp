import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../contribution.service';
import { Contribution } from './../../classes/contribution';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  contributions: Observable<Contribution[]>;

  constructor(private contributionService: ContributionService) { }

  ngOnInit() {
  	this.contributionService.getContributions().
	  subscribe(data => {
	  	this.contributions = data['data'];;
	  });
  }

  create_ask(){
  	console.log(this.contributionService.create_ask())
  }

  create_url(){
  	console.log(this.contributionService.create_url())
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
