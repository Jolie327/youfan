/**
 * Created by admin on 2017/3/10.
 */
$(function(){
    function calendar(){
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();
    var code="��һ����������";
    var week=code.charAt(date.getDay());
    return "������"+year+"��"+month+"��"+day+"��"+"&nbsp;&nbsp;����"+week;
}
    calendar();
    $(".nowdate").append(calendar());
})