import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  username: string;
  user: any;
  movies: any;
  shows: any;
  comments: any;
  noUserFound: boolean;
  noMovies: boolean;
  noShows: boolean;
  noComments: boolean;
  indexOfComment: number;

  constructor(private router: Router, private route: ActivatedRoute, private profileService: ProfileService) {
   }

  ngOnInit() {
    this.noUserFound = false;
    this.noMovies = false;
    this.noShows = false;
    this.noComments = false;
    this.comments = [];
    this.movies = [];
    this.shows = [];
    
    this.route.params.subscribe((params) => {
      this.username = params.username;
      this.profileService.getProfile(this.username)
      .then((user) => {
        if (user === null) {
          this.noUserFound = true;
          return;
        }
        this.user = user;
        if (user.movies.length === 0) {
          this.noMovies = true;
        }
        if (user.shows.length === 0) {
          this.noShows = true;
        }
        if (user.comments.length === 0) {
          this.noComments = true;
        }
        this.movies = user.movies;
        this.shows = user.shows;
        this.comments = user.comments;
      });
    });
  }

  handleDeleteComment(comment) {
    this.indexOfComment = null;
    this.profileService.deleteComment(comment)
    .then((commentToDelete) => {
      this.comments.find((commentOfUser, index) => {
        if (commentOfUser._id === commentToDelete._id) {
          this.indexOfComment = index;
        }
      });
      this.comments.splice(this.indexOfComment, 1);
    });
  }

}
