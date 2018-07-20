import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder,
			  private authenficationService: AuthenficationService){ }

  ngOnInit() {
	if (localStorage.getItem('currentUser')) {
		try
			var currentUserJS=JSON.parse(localStorage.getItem('currentUser'));
			this.currentUser.id=currentUserJS.id;
			this.currentUser.userName=currentUserJS.user;
			console.log('has',currentUserJS.id);
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
	  this.authenficationService.login(this.f.username.value,this.f.password.value)
	  	.subscribe(
			data=>{
				this.currentUser.id=data.id; 
				if(this.currentUser.id>0){
					this.currentUser.userName=data.user;
					this.errorConnect=false;
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
	  this.loginForm.controls.username.value='';
	  this.loginForm.controls.password.value='';
  }
  
  onLogOut() {
	  localStorage.clear('currentUser');
	  this.submitted = false;
	  this.currentUser.id=0;
	  this.clearLoginForm();
  }
  


}
