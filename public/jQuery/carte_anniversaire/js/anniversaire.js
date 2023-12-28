$(document).ready(function()
{
    var obj = document.createElement("audio");
    obj.src = "sounds/party_horn-Mike_Koenig.mp3";
    obj.volume = 1;
    obj.autoplay = false;
    obj.preLoad = true;
    obj.control = false;

    $('.SmallRectangle:eq(2)').on('click', function(){
        obj.play();
    })
});


$('#Rectangle').mouseover(function(){
    $(this).css('width', '10.5em'); 
});


$('#Rectangle').mouseleave(function(){
    $(this).css('width', '10em'); 
});


$('.SmallRectangle').mouseover(function(){
    $(this).css('width', '9em'); 
});

$('.SmallRectangle').mouseleave(function(){
    $(this).css('width', '8em'); 
});


$('#Rectangle').on('click', function(event){
    $('.SmallRectangle:eq(0)').fadeIn();
    $('.SmallRectangle:eq(0)').css('background-color', 'rgb(255, 168, 168)');  
    
    
});


$('.SmallRectangle:eq(0)').on('click', function(event){
    $('.SmallRectangle:eq(1)').css('background-color', 'rgb(237, 127, 255)');  
    $('.SmallRectangle:eq(1)').fadeIn();
});


$('.SmallRectangle:eq(1)').on('click', function(event){
    $('.SmallRectangle:eq(2)').css('background-color', '#ede972');  
    $('.SmallRectangle:eq(2)').fadeIn();
});


$('.SmallRectangle:eq(2)').on('click', function(event){
    $('#Rectangle').fadeOut();
    $('#card').css('background', 'url("img/HB.gif")');
    $('#card').css('background-size', 'cover');
    $('.SmallRectangle').slideUp();
});






