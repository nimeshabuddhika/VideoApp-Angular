import {Component, EventEmitter, OnInit} from '@angular/core';
import {Video} from '../model/video';
import {VideoService} from "../video.service";

@Component({
    selector: 'app-video-center',
    templateUrl: './video-center.component.html',
    styleUrls: ['./video-center.component.css'],
    providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {


    public videos = [];

    selectedVideo: Video;

    constructor(private _videoService: VideoService) {
    }

    ngOnInit() {
        this._videoService.getVideos()
            .subscribe(data => this.videos = data);
    }

    onSelectVideo(video: any) {
        this.selectedVideo = video;
        console.log(this.selectedVideo);
    }


    onSubmitVideo(video: Video) {
        this._videoService.addVideo(video)
            .subscribe(res => {
                console.log(res);
            });
    }
}
