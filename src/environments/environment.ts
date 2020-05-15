// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: 'AIzaSyAaHwM7Y6fgl-wio3zQyfmxVfw488sNOns',
    authDomain: 'bernadettephd-729ca.firebaseapp.com',
    databaseURL: 'https://bernadettephd-729ca.firebaseio.com',
    projectId: 'bernadettephd-729ca',
    storageBucket: 'bernadettephd-729ca.appspot.com',
    messagingSenderId: '782884373057',
    appId: '1:782884373057:web:aa7edb03dc6e515f2e7cc0',
    measurementId: 'G-HWMDY8TRXN'
  },
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
