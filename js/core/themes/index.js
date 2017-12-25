define(['core/themes/header', 'config','lib/unixtodate'], function (header, config,unixtodate) {
    var viewindex = function (page) {
        header.view()
        $('body').append('<main></main>')
        $.ajax({
            type: "GET",
            url: config['srcurl']+"BlogLIst.json",
            dataType: "json",
            success: function(info){
                for (var i = page*10-10;i<=page*10;i++){
                    $.ajax({
                        type: "GET",
                        url: config['srcurl']+"Blogs/"+info[i]['time']+".md",
                        dataType: "text",
                        async: false,
                        success:function(data){
                            $('main').append('\
                            <div>\
                                <div>'+ info[i]['title']+'</div>\
                                <div>'+unixtodate(info[i]['time'])+'</div>\
                            </div>\
                            <div>\
                                <p>\
                                '+data+'\
                                </p>\
                            </div>\
                            ')
                        }
                    })
                }
            }
        })

    }
    return {
        viewindex: viewindex
    }
})