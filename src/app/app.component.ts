import { Component } from '@angular/core';

// tslint:disable-next-line:max-line-length
// make sure that you import the angularfire database right here into the component that you're using. Normally, or when keeping best practice in your mind, you would not usually put this in the app.component. You would definitely put this in it's own component where it will be used.
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // initalize courses array here vvv
  courses: any[];


  // here you want to make sure that you're injecting the AngularFireDatabase that you imported
  constructor( private adb: AngularFireDatabase, afs: AngularFirestore ) {

    // using adb.list() to get the obeservable and subscribe to courses collection
    // adb.list('/courses').valueChanges().subscribe( courses => {
    //   this.courses = courses;
    // });

    // as you can see for the cloud service you have to use afs.collection() instead of list()
    afs.collection('courses').valueChanges().subscribe( courses => {

      // sets to this.courses pretty obvious in itself no explanation really needed
      this.courses = courses;
      // again just logs it, nothing crazy going on here
      console.log(this.courses);
    });
  }
}
