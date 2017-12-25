requirejs.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jquery',
        'geturlget': 'lib/geturlget'
    }
});
require(["core/analysis"], function (analysis) {
    analysis.start()
})