var argv = require('yargs')
    .alias('a','add')
    .alias('d','del')
    .argv;
var fs = require('fs');

var action = argv.a || argv.d;




if(action){
    if(argv.a){
        // 添加控制器
        // 过滤一些非常规字符
        var name = filterStr(argv.a);
        var buf = new Buffer('<?php\nnamespace Home\\Action;\nuse Think\\Action;\nclass '+name+'Action extends Action {\n    public function index() {\n  \n    }\n}');
        fs.writeFile('./Apps/Home/Action/'+name+'Action.class.php',buf,function (err, fd) {
            if(err){
                return console.error(err);
            }
            console.log(name+'Action.class.php 创建成功');
        })



    }else if(argv.d){
        // 删除控制器
        var name2 = filterStr(argv.d);
        var url = './Apps/Home/Action/'+name2+'Action.class.php';
        if(fs.existsSync(url)){
            fs.unlink(url,function (err) {
                if(err){
                    return console.error(err);
                }
                console.log(name2+'Action.class.php 删除成功');
            })
        }else{
            console.log(fs.existsSync(url));
            console.log('没有'+name2+'Action.class.php控制器');
        }


    }
}else {
    console.log('***********Action控制器*************');
    console.log('usage(用法)：node Action/Action.js [-a/--add 添加控制器] [-d/--del 删除控制器] 控制器名');
    console.log('例如：添加一个名为UserAction.class.php的控制器，node Action -a User');
    console.log('例如：删除一个名为UserAction.class.php的控制器，node Action -d User');
}


function filterStr(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{}【】‘；：”“'。，、？]");
    var specialStr = "";
    for(var i=0;i<str.length;i++)
    {
        specialStr += str.substr(i, 1).replace(pattern, '');
    }

    // 并自动将首字母变大写
    return specialStr.charAt(0).toUpperCase() + specialStr.slice(1);
}


