import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  public photoUrl: string;

  constructor(private readonly photoService: PhotosService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  public onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((res) => {
      // console.log(res.urls.regular);
      this.photoUrl = res.urls.regular;
    });
  }
}
