/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $(".tooltiper_left").attr("data-placement", "left");
    $(".tooltiper_left").tooltip();
    $(".tooltiper_left").tooltip({trigger: "hover"}); 
    
    $(".tooltiper_bottom").attr("data-placement", "bottom");
    $(".tooltiper_bottom").tooltip();
    $(".tooltiper_bottom").tooltip({trigger: "hover"}); 
    
});

