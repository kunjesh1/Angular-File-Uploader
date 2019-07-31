import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'client';

  afuConfig = {
    uploadAPI: {
      url:"http://localhost:3000/file",
      headers: {
     'Content-Type': 'application/json'
        
         },
         body:FormData,
         theme: "dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true
    }
};
}
