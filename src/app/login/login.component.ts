import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user'
import { AuthenficationService } from '../authenfication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
  	
  currentUser = new User;	
  loginForm: FormGroup;
  submitted = false;
  errorConnect = false;
  loading = false;
  msg='';
  noserver=true;

  constructor(private formBuilder: FormBuilder,
			  private authenficationService: AuthenficationService, 
			  private route: Router){ }

  ngOnInit() {
	if (localStorage.getItem('currentUser')) {
		try {
			var currentUserJS=JSON.parse(localStorage.getItem('currentUser'));
			this.currentUser.id=currentUserJS.id;
			this.currentUser.userName=currentUserJS.user;
		}
		catch(e){
			this.currentUser.id=0;
		}			
	}else{
		this.currentUser.id=0;
	}
	this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
  
  get f() { 
	return this.loginForm.controls; 
  }
  
  showErrorMsg(msg){
	this.errorConnect=true;
	this.msg=msg;
	setTimeout(()=>{this.errorConnect=false;},3000);  
  }
  
  onLogIn() {
	  this.submitted = true;
	  if(this.loginForm.invalid) return;
	  this.loading = true;
	  //TODO hide it!
	  if(this.noserver){
		  this.currentUser.id=1; 
		  this.currentUser.userName='admin';
		  this.errorConnect=false;
		  this.loading = false;
		  localStorage.setItem('currentUser', JSON.stringify({'id':'1','user':'admin','token':'1111'}));
		  this.route.navigate(['']);
		  return;
	  }
	  this.authenficationService.login(this.f.username.value,this.f.password.value)
	  	.subscribe(
			data=>{
				this.currentUser.id=data.id; 
				if(this.currentUser.id>0){
					this.currentUser.userName=data.user;
					this.errorConnect=false;
					this.route.navigate(['']);
				}else{
					this.showErrorMsg('Ошибка аутентификации');
				}
				console.log(data);
				this.loading = false;
			},
			error=>{
				console.log(error); 
				this.loading = false;
				this.showErrorMsg('Ошибка связи с сервером');
			}
		);
			
  }
  
  clearLoginForm(){
	  this.loginForm.get('username').setValue('');
	  this.loginForm.get('password').setValue('');
  }
  
  onLogOut() {
	  localStorage.removeItem('currentUser');
	  this.submitted = false;
	  this.currentUser.id=0;
	  this.clearLoginForm();
	  this.route.navigate(['']);
  }
  


}
