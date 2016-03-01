var gulp = require("gulp"),
    cfg = require("./tm.config"),

    glob = require("glob"),
    exec = require("child_process").exec,

    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant");


gulp.task("js", function(){

    var fileList = glob.sync(cfg.js + "/app/*.js"),
        fileName, bundle;

    fileList.map(function(entry){

        fileName = /\w+(?=\.js)/gi.exec(entry)[0];
        bundle = exec('jspm bundle-sfx '+ entry +' '+ cfg.build + '/js/'+ fileName +'.bundle.min.js --minify --skip-source-maps')
        
        return bundle;
    })

});

gulp.task("css", function(){
    
    var fileList = glob.sync(cfg.css + "/*.less"),
        fileName, bundle;

    fileList.map(function(entry){
        fileName = /\w+(?=\.less)/gi.exec(entry)[0];
        bundle = exec('lessc --clean-css '+ entry +' --autoprefix="last 2 versions" '+ cfg.build +'/css/'+ fileName +'.bundle.min.css');
    });

});

gulp.task("fonts", function(){
    
    gulp.src(cfg.fonts +"/**/*.*")
        .pipe(gulp.dest(cfg.build +"/fonts/"));
});

gulp.task("images", function(){
    
    gulp.src(cfg.images +"/**/*.*")
        .pipe(imagemin({
            optimizationLevel: 4,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(cfg.build +"/images/"));
});

gulp.task("watcher", function(){
    
    //gulp.watch(cfg.js +"/**/*.js", ["js"]);
    gulp.watch(cfg.css +"/**/*.less", ["css"]);
    gulp.watch(cfg.fonts +"/**/*.*", ["fonts"]);
    gulp.watch(cfg.images +"/**/*.*", ["images"]);

});

gulp.task("default", ["css", "fonts", "images", "watcher"]);