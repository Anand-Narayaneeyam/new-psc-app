// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAw7wZ1u1X1RH1LEhzRCauN6VuUJhkkwDg",
    authDomain: "kpsc-app.firebaseapp.com",
    databaseURL: "https://kpsc-app.firebaseio.com",
    projectId: "kpsc-app",
    storageBucket: "kpsc-app.appspot.com",
    messagingSenderId: "309158527323"
  }

};
