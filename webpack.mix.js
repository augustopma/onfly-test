// webpack.mix.js

let mix = require('laravel-mix');

mix.copy('quasar-project/dist/spa/index.html', 'resources/views/app.blade.php')
    .copyDirectory('quasar-project/dist/spa', 'public');