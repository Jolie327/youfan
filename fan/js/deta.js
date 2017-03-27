/**
 * Created by admin on 2017/3/10.
 */
$(function(){
    function calendar(){
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();
    var code="日一二三四五六";
    var week=code.charAt(date.getDay());
    return "今天是"+year+"年"+month+"月"+day+"日"+"&nbsp;&nbsp;星期"+week;
}
    calendar();
    $(".nowdate").append(calendar());
})