//获得scrolltop
function getScrollTop() {
var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    }
        else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
//获取body的总高度
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
window.onscroll = function () {
    if (getScrollTop() + getScreenSize()[1] == getScrollHeight()) {
        console.log("到达底部,加载");

        //到达底部调用ajax
        var content = document.getElementsByClassName("content")[0];

        // var item = document.createElement("div");
        // item.className="item";
        // item.innerHTML="<a>123</a>"
        // content.appendChild(item);

        //这里从php获取数组。
        //每个数组元素要求包含
        //用户头像路径、用户名、发布日期、图片路径、文本内容、（点赞数、评论暂时不用）

        additem("images/user2.png", "Fstar", "今天 15:21", "images/img2.png", "你值得拥有。")
        //创建节点的很多代码其实是一样的，写成函数提高复用。
        //传入节点类型、类名。
        //虽然想加一个函数参数来加入属性，比如id=“a”。不过不会写。
        function addNode(classname, nodename){
            //但nodename没指定时（只有一个参数），默认为div（最常用的节点）
            var node = document.createElement(nodename||"div");
            if(classname !== "")
            {
                node.className = classname;
            }
            return node;
        }

        //因为时间关系，没空研究好的写法。
        function additem(usericon, username, date, imgsrc, text){
            // 第一级
            var item = addNode("item");
            // 第二级
                var u_info = addNode("u-info");
                    //第三级
                    var u_icon = addNode("u-icon");

                        //4
                        var uimg = addNode("","img");
                        uimg.src = usericon;
                        uimg.alt = username;
                        u_icon.appendChild(uimg)
                        u_info.appendChild(u_icon);

                    var name_pub = addNode("name-pub");
                        var u_name = addNode("u-name");
                        var u_name_txt = addNode("","a");
                        u_name_txt.innerText = username;
                        u_name.appendChild(u_name_txt);
                        name_pub.appendChild(u_name);

                        u_pub = addNode("u-pub");
                        u_pub.innerText = date;
                        name_pub.appendChild(u_pub);
                        u_info.appendChild(name_pub);


                var itemcontent = addNode("itemcontent");
                var u_list = addNode("u-list");
            //添加到div.content下。
            item.appendChild(u_info);
            item.appendChild(itemcontent);
            item.appendChild(u_list);
            content.appendChild(item);
        }
    }



}
