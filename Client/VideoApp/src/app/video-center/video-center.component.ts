import {Component, OnInit} from '@angular/core';
import {Video} from '../model/video';

@Component({
    selector: 'app-video-center',
    templateUrl: './video-center.component.html',
    styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

    videos: Video[] = [
        {
            _id: '1',
            title: 'Title 1',
            desc: 'Desc 1',
            url: 'url 1'
        },
        {
            _id: '2',
            title: 'Title 2',
            desc: 'Desc 2',
            url: 'url 2'
        },
        {
            _id: '3',
            title: 'Title 3',
            desc: 'Desc 3',
            url: 'url 3'
        },
        {
            _id: '4',
            title: 'Title 4',
            desc: 'Desc 4',
            url: 'url 4'
        },
        {
            _id: '5',
            title: 'Title 5',
            desc: 'Desc 5',
            url: 'url 5'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
