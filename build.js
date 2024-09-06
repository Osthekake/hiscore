var browserify = require('browserify');
var tsify = require('tsify');
var fs = require("fs");

fs.mkdirSync("build", { recursive: true })

//copy contents of static
fs.cpSync("static", "build", {recursive: true});

browserify()
    .add('src/main.ts')
    .plugin(tsify, { noImplicitAny: true })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(process.stdout);