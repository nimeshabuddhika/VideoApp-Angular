import {Component, EventEmitter, OnInit} from '@angular/core';
import {Video} from '../model/video';
import {VideoService} from '../video.service';

@Component({
    selector: 'app-video-center',
    templateUrl: './video-center.component.html',
    styleUrls: ['./video-center.component.css'],
    providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {


    public videos = [];

    selectedVideo: Video;

    hideNewVideo = false;

    constructor(private _videoService: VideoService) {
    }

    ngOnInit() {
        this._videoService.getVideos()
            .subscribe(data => this.videos = data);
    }

    onSelectVideo(video: any) {
        this.hideNewVideo = false;
        this.selectedVideo = video;
        console.log(this.selectedVideo);
    }


    onSubmitVideo(video: Video) {
        this._videoService.addVideo(video)
            .subscribe(res => {
                this.videos.push(res);
                this.selectedVideo = res;
                this.hideNewVideo = false;
            });
    }

    newVideo() {
        this.hideNewVideo = true;
    }

    onUpdateVideoEvent(video: any) {
        this._videoService.updateVideo(video)
            .subscribe(res => {
                console.log(res);
                this.selectedVideo = null;
            });
    }

    onDeleteVideo(video: any) {
        this._videoService.deleteVideo(video)
            .subscribe(res => {
                for (let i = 0; i < this.videos.length; i++) {
                    if (this.videos[i]._id === video._id) {
                        this.videos.splice(i, 1);
                    }
                }
                this.selectedVideo = null;
            });
    }
}
