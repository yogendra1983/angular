import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

youtubeUrl = "https://www.youtube.com/watch?v=PFP0oXNNveg&t=4124s";
youtubeId = "PFP0oXNNveg&t=4124s";

  constructor(private embedService: EmbedVideoService) {
    console.log(this.embedService.embed(youtubeUrl));
   }

  ngOnInit() {

  }

}
