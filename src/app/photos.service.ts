import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

const API_URL: string = 'https://api.unsplash.com/photos/random';
const ACCESS_KEY: string = '1xhAPlekEUNv9MbQyh6TaGlSb9sLYvYZA5-zYvaWu80';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private readonly http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>(API_URL, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
  }
}
