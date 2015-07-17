
var GLOBSTAR = '**/*';

var basePaths = {
    src: 'src/',
    dest: 'dist/'
};

var typeMap = {
    // templates
    jade:       ['*.jade'],

    // styles
    css:        [GLOBSTAR + '.css'],
    less:       [GLOBSTAR + '.less'],

    // scripts
    js:         [GLOBSTAR + '.js', '!lib/**/*.js'],
    coffee:     [GLOBSTAR + '.coffee'],
    jslibs:     ['lib/**/*.js'],

    // images
    png:        [GLOBSTAR + '.png'],
    jpg:        [GLOBSTAR + '.jpg', GLOBSTAR + '.jpeg'],
    gif:        [GLOBSTAR + '.gif'],

    // extras
    extras:   [GLOBSTAR]
};

module.exports = {
  SERVER_PORT: 1337,
  GLOBSTAR: GLOBSTAR,
  basePaths: basePaths,


  typePaths: {
    templates: {
      src: basePaths.src + 'views/',
      dest: basePaths.dest + ''
    },
    styles: {
      src: basePaths.src + 'css/',
      dest: basePaths.dest + 'css/'
    },
    scripts: {
      src: basePaths.src + 'js/',
      dest: basePaths.dest + 'js/'
    },
    images: {
      src: basePaths.src + 'images/',
      dest: basePaths.dest + 'images/'
    },
    extras: {
      src: basePaths.src + 'fonts/',
      dest: basePaths.dest + 'fonts/'
    }
  },

  typeMap: typeMap,

  appFiles: {
    templates:  typeMap.jade,
    styles:     typeMap.css.concat(typeMap.less),
    scripts:    typeMap.js.concat(typeMap.coffee),
    images:     typeMap.png.concat(typeMap.gif).concat(typeMap.jpg),
    extras:     typeMap.extras
  },

  vendorFiles: {
    scripts:    typeMap.jslibs
  },

  scriptOrder: [    
    'jquery-1.11.3.min.js',
    'bootstrap.min.js',
    'angular.min.js',
    'ngStorage.min.js',
    'lodash.min.js',
    'd3.min.js',
    'd3.tip.min.js',
    'topojson.min.js',
    'datamaps.min.js',
    'moment.min.js',
    'moment.en.min.js',
    'toastr.min.js',
    'jquery.sparkline.min.js',
    'primus.min.js',

    'app.js',
    'controllers.js',
    'filters.js',
    'directives.js',
    'script.js',
  ],

  styleOrder: [
    'bootstrap.min.css',
    'minimal-icons-embedded.css',
    'toastr.min.css',
    'style.css'
  ]
};
