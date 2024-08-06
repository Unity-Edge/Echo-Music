// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("document").ready(function(){
    $("#loginBtn").onclick(function(){

    })
    $.ajax({
        url:"https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&key=AIzaSyBFzJUW3KBIExa6qiowTRVO1lPktKVwByc",
        success:function(data){
            console.log(data.items)
            //$("#yt-video").attr("src","https://www.youtube.com/embed/"+data.items[0].id+"?si=68zEdQhVk--NIeCz")
        }
    })
})