import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

    constructor(private route: ActivatedRoute) {}
 
    ngOnInit(){
        this.route.paramMap.subscribe(params => {console.log(params)})
    }

}
