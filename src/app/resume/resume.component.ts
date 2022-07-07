import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // downloadPDF(url): any {
  //   const options = { responseType: ResponseContentType.Blob  };
  //   return this.http.get(url, options).map(
  //   (res) => {
  //       return new Blob([res.blob()], { type: 'application/pdf' });
  //   });
  // }
}
