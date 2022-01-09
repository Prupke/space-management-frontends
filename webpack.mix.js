const mix = require('laravel-mix');

mix.postCss('src/css/app.css', 'public/css', [
    require('postcss-import'),
    require('autoprefixer'),
]);

mix.copy('src/**/*.html', 'public');

mix.copyDirectory('src/images', 'public/images');

if (mix.inProduction()) {
    mix.version();
}
