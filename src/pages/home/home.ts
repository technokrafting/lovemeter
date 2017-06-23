import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    name1='';
    name2='';
    public signForm: FormGroup;
    constructor(public navCtrl: NavController, private fb: FormBuilder) {
    
  }
    
    get score(){
    	if(this.name1!='' && this.name2!=''){
    		const letters=(this.name1+this.name2).toLowerCase();
    	let sum = 0;
    	for(let i=0;i < letters.length;i++){
    		sum += letters.charCodeAt(i);
    	}
    	return sum % 101;	
    	}
    	
    }

     ngOnInit() {
	    this.signForm = this.fb.group({
	      'firstName': ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
	       'secondName': ['', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])]
	      
	    });

  }
  
}

