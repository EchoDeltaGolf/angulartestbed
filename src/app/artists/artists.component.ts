import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  public artists: any[] = [];

  constructor(private list: DataService) { }

  ngOnInit(): void {
    this.artists = this.list.getList();
  }
}
