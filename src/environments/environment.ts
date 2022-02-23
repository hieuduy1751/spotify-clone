// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,
  token: '',
  apiPath: {
    home: 'https://api.spotify.com/v1',
    search: { search: '/search?' },
    auth: 'https://accounts.spotify.com/en/authorize',
  },
  sightengine: {
    api_user: '1805283954',
    api_secret: 'enBHTtBFJ2vzHSC2p3MG'
  }
  ,
  spotify: {
    client_id: '9312f1aa69f34c8eb235b641a0a5e8ed',
    redirect_uri: 'http://localhost:4200/auth/callback',
    scope: 'user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing streaming playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-library-modify user-library-read user-read-email user-read-private'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
