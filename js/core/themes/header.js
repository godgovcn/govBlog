define(['jquery', 'config'], function ($, config) {
    var mould = "\
    <header>\
        <h1>"+config['title']+"</h1>\
        <h2>"+config['subtitle']+"</h2>\
    </header>\
    "
    var view = function (page) {
        $('body').append(mould)
    }
    return {
        view: view
    }
})