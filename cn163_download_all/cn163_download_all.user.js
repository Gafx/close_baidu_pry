// ==UserScript==
// @name         cn163_download_all
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  find download url!
// @author       gafx
// @include     http://cn163.net/archives/*
// @grant        none
// ==/UserScript==


function find_download_url(key_type) {
    oa = document.getElementsByTagName("a");
    url_list = [];
    max_length = 0;
    for (var i in oa) {
        if (oa[i].href) {
            if (oa[i].href.indexOf(key_type) != -1) {
                url_list.push(oa[i].href);
                if (oa[i].href.length > max_length) {
                    max_length = oa[i].href.length;
                }
            }
        }
    }
    return {'url_list':url_list,'max_length':max_length}
}

function show_window(content,w_height,w_width){
    OpenWindow = window.open("", "newwin", "height=" + w_height + ",width=" + w_width * 8 + ",toolbar=no,scrollbars=no,menubar=no");
    for (var u in content) {
        OpenWindow.document.write('<p style="margin:0;font-size:10px">' + content[u] + "</p>");
    }
    OpenWindow.document.close();
}

function add_button(parent,button_size,content,click_func){
    
    var down_load_button = document.createElement("input");
    down_load_button.setAttribute("type","button");
    down_load_button.setAttribute("size",button_size);
    down_load_button.setAttribute("value",content);
    down_load_button.onclick=click_func;
    parent.appendChild(down_load_button);

}

(function() {
    //'use strict';
    target_element=document.getElementsByTagName('h2')[0];
    magnet_url = find_download_url('magnet');
    ed2k_url = find_download_url('ed2k');
    thunder_url = find_download_url('thunder');

    if(magnet_url['url_list'].length != 0){
        add_button(target_element,"50","磁力",function(){show_window(magnet_url['url_list'],magnet_url['url_list'].length*20,magnet_url['max_length'])});
    }
    if(ed2k_url['url_list'].length != 0){
        add_button(target_element,"50","电驴",function(){show_window(ed2k_url['url_list'],ed2k_url['url_list'].length*20,ed2k_url['max_length'])});
    }
    if(thunder_url['url_list'].length != 0){
        add_button(target_element,"50","迅雷",function(){show_window(thunder_url['url_list'],thunder_url['url_list'].length*20,thunder_url['max_length'])});
    }



})();