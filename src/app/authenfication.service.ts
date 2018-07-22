import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenficationService {
	
  private serverAuthUrl='//localhost:8888/auth';

  constructor(private http: HttpClient) { }
  
  login(name,pass:string){
	  return this.http.post<any>(this.serverAuthUrl, { username: name, password: pass })
		.pipe(map(user=>{
				if (user && user.token){
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
				return user;
			})
		);
  }
}
