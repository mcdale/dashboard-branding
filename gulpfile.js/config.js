module.exports = {
    src: '.',
    dest: '.',
    images: {
        src: './assets/images/**',
        dest: './images',
        settings: {
          format: "png",
          height: 96
        }
    },
    svg: {
        src: './assets/**/*.svg',
        dest: './images',
    },
    fonts: {
        src: './fonts/**',
        dest: './fonts',
    },
    sass: {
        src: './assets/styles/**/*.{sass,scss}',
        dest: './css',
        autoprefixer: {
            browsers: ['last 2 versions', 'ie 9-11', 'iOS 8'],
            cascade: false,
        },
        settings: {
            includePaths: [
                'node_modules/bootstrap-sass/assets/stylesheets',
            ],
            outputStyle: 'expanded',
        },
        // liveLinting: true,
    },
    less: {
      autoprefixer: {
        browsers: ['last 2 versions', 'ie 9-11', 'iOS 8'],
        cascade: false,
      },
      src: [
        './less/custom-bootstrap.less',
        './less/print.less',
        './less/style-contrast.less',
        './less/style-guide.less',
        './less/style-loading.less',
        './less/style.less',
        './less/version.less',
      ],
      dest: './css',
      settings: {
        paths: [

        ]
      },
    },
    scripts: {
        src: './assets/scripts/**/*.js',
        dest: './js',
        // liveLinting: true,
    },
    browserify: {
        // A separate bundle will be generated for each
        // object in the array below
        bundleConfigs: [

            // Uncomment me to add a file for Babel/Browserify to transpile.
            // {
            //     entries: src + '/js/main.js',
            //     transform: [
            //         ['babelify', { presets: ['es2015'] }],
            //     ],
            //     dest: dest + '/js/',
            //     outputName: 'main.bundled.js',
            //     cache: {},
            //     packageCache: {},
            //     fullPaths: false,
            // },
        ],
    },
    war: {
      css: {
        src: './css'
      },
      images: {
        src: './images/**/*.{jpg,png,svg}'
      },
      customer: {
        src: './less/customer/**/*.less'
      },
      icons: {
        src: './icons/**/*.{png,ico}'
      },
    }
};
