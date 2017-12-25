//Unix转普通时间
define(function () {
    var Dates = function (unix) {
        var time = new Date(unix*1000)
        var ymd = ""
        ymd += time.getUTCFullYear() + "-";
        ymd += (time.getUTCMonth()+1) + "-";
        ymd += time.getUTCDate();
        return ymd
    }
    return Dates
})