import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/User';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../shared/Post';

@Component({
  selector: 'pm-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;
  userPost:IPost[];
  pageTitle: string ="User Name: ";
  constructor(private servise: UserService,
              private _router: ActivatedRoute,
              private _Router: Router,

             ) { }

  ngOnInit() {
    
    const id = +this._router.snapshot.paramMap.get('id');
    if ( id )
    {
      this.servise.getUserByID(id).subscribe(
       users => this.user =users[0]
             );

             this.servise.getPostByUserID(id).subscribe(
              posts => this.userPost =posts
                    );

    }

  }
  onBack(): void {
    this._Router.navigate(['/Users']);
  }
}
