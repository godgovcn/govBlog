define(['jquery','geturlget','core/themes/index'], function($,$_GET,index) {
    var start = function(){
        if($_GET){

        }else{
            index.viewindex(1)
        }
    }
    return {
        start:start
    }
})