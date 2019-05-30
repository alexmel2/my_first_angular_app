import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/User';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'pm-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle: string = 'User List';
 
  usertList: IUser[];
  products: IUser[];
  filterProductList: IUser[];
  _listFilter: string;
 

  ngOnInit() {
    this.http.getUsers().subscribe(
      (products) => {
        console.log('test products :', products);
                        this.usertList = products;
                        this.filterProductList = this.usertList;
                    }

    );
  }
  get listFilter(): string
{
    return this._listFilter;
}
constructor(private http: UserService) {
}
deteUser(id:number)
{
this.http.deleteUser(id).subscribe( response=> {debugger})
}
set listFilter(value:string)
{
 
this._listFilter = value;
this.filterProductList = this.listFilter ? this.usertList.filter
((user: IUser) => user.name.toLocaleLowerCase().indexOf(this.listFilter.toLocaleLowerCase()) !== -1 ) : this.usertList;

}
}
