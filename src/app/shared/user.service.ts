import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IUser } from './User';
import { IPost } from './Post';

@Injectable()
export class UserService {
    private _usertUrl = 'http://jsonplaceholder.typicode.com';

    deleteUser(id)
    {
      debugger;
      let params = new HttpParams().set('', id.toString());
    return this._http.delete(this._usertUrl+"/users"+"/"+id)
    }
    getUsers(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this._usertUrl+"/users")
        .do(data => console.log('All: ' + JSON.stringify(data)));
          }

          getUserByID(id: number): Observable<IUser>
          {
            let params = new HttpParams().set('id', id.toString());
          return this._http.get<IUser>(this._usertUrl+"/users",{params:params})
     
          }
          getPostByUserID(id: number): Observable<IPost[]>
          {
            let params = new HttpParams().set('userId', id.toString());
          return this._http.get<IPost[]>(this._usertUrl+"/"+"posts",{params:params})
     
          }

    constructor(private _http: HttpClient) {}
}
