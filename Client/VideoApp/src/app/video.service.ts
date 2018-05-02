import {Injectable} from '@angular/core';
import {Video} from './model/video';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class VideoService {

    private __url = '/api/videos';

    constructor(private http: HttpClient) {
    }

    getVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(this.__url);
    }

    addVideo(video: Video) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post<Video>(this.__url, JSON.stringify(video), httpOptions);
    }

    updateVideo(video: Video) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put<Video>(this.__url, JSON.stringify(video), httpOptions);
    }

}
