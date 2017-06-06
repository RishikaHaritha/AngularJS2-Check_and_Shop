import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public af: AngularFire,private router : Router) {
  }

  ngOnInit() {
    /* this.af.auth.subscribe(user => {
      if (user) {
        this.router.navigate(['/groceries']);
      } else {
        this.router.navigate(['/']);
      }
    }); */
  }
  
}
