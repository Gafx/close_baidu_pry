// ==UserScript==
// @name         close baidu Pry
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  自动关闭百度隐私追踪
// @author       gafx
// @match        *://*.baidu.com/*
//@require        http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js
//@require        http://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js
// ==/UserScript==

function show_msg(){
    var msg_box = document.createElement('div');
      msg_box.style.position='absolute';
    msg_box.style.top=0;
    msg_box.style.right=0;
    msg_box.style.zIndex=99999;
    msg_box.style.width='100%';
    msg_box.style.fontSize='1.2rem';
    msg_box.style.textAlign='center';
    msg_box.style.display='none';
    msg_box.style.background='#00b643';
    msg_box.style.color='white';
    msg_box.innerText='已关闭百度隐私追踪！';
    msg_box.id='f_bd_lalala';
   
    document.body.appendChild(msg_box);
    $("#f_bd_lalala").fadeIn(2000);
    $("#f_bd_lalala").fadeOut(2000);
    
}

(function() {
    if(document.cookie.match(/PRY=(\d)/)){
        pry_value = document.cookie.match(/PRY=(\d)/)[1];
        if (pry_value == '0'){
            $.cookie('PRY',1);
            show_msg();
        }
     }else{
         $.cookie('PRY',1);
         show_msg();
     }
})();