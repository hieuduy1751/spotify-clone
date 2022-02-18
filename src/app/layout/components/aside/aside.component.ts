import { PlaylistState } from './../../../spotify/states/playlist/playlist.state';
import { Component, Input, OnInit } from '@angular/core';
import { AsideMenu } from '../../../spotifyUI/configs/aside-menu.config'
import { Playlist } from 'src/app/spotify/models/playlist/playlist';
import { UserState } from 'src/app/spotify/states/user/user.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @Input() menu!: AsideMenu[];
  @Input() buttons!: AsideMenu[];
  myPlaylists: Playlist[] = [];

  constructor(private playlistState: PlaylistState, private userState: UserState, private route: Router) { }

  ngOnInit(): void {
    this.listenStateEvent();
  }

  listenStateEvent(): void {
    this.playlistState.playlists$.subscribe(playlists => this.playlistsChange());
  }

  playlistsChange(): void {
    const playlists = this.playlistState.getMyPlaylist();

    if (playlists) {
      this.myPlaylists = playlists;
    }
  }

  createNewPlaylist(): void {
    this.playlistState.createNewPlaylist(this.userState.getMe().id).subscribe(res => {
      console.log(res);
      this.route.navigate(['/playlist/' + res.id]);
    });
  }
}
