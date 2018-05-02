import {Injectable} from '@angular/core';
import {Video} from './model/video';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VideoService {

    private __getAll = 'http://localhost:3030/api/videos';

    constructor(private http: HttpClient) {
    }

    getVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(this.__getAll);
    }

}
