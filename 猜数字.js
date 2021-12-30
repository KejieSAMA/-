
for(var i = 1; i < 10; i++){
    var C = 0;
    var K = 0;
    const ANSWER = [5,7,6,9];//定义一个数组，来作为猜数字的答案
    var A1=prompt("请输入你猜测的第一个数字","");//弹出一个让用户猜数字的窗口
    var A2=prompt("请输入你猜测的第二个数字","");
    var A3=prompt("请输入你猜测的第三个数字","");
    var A4=prompt("请输入你猜测的第四个数字","");
    const INPUT = [A1,A2,A3,A4];
    for(var a = 0; a < 4; a++){//循环四次对比ANSWER[]和INPUT[]数组对应值是否相同
        if(ANSWER[a]==INPUT[a]) {
            C++;
        } else {
            K++;
        }
    }
    alert("你目前猜的结果为: "+C+"A"+K+"B");//输出猜测结果
    if(C==4){
        alert("你一共猜了"+i+"次，恭喜你猜到答案")
        i = 10;//直接结束循环
    } else {
        alert("你一共猜了"+i+"次，加油吧，继续猜一下答案是什么")
    }
}