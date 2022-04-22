import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artist-names',
  templateUrl: './artist-names.component.html',
  styleUrls: ['./artist-names.component.css']
})
export class ArtistNamesComponent implements OnInit {
  public artists : any[] = []

  constructor(private list: DataService) { }

  ngOnInit(): void {
    this.artists = this.list.getList();
  }
}
