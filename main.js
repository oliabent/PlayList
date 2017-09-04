
var track1 = document.getElementById('audio1')
var track2 = document.getElementById('audio2')
var track3 = document.getElementById('audio3')
var track4 = document.getElementById('audio4')
var track5 = document.getElementById('audio5')
var track6 = document.getElementById('audio6')
var track7 = document.getElementById('audio7')
var track8 = document.getElementById('audio8')
var track9 = document.getElementById('audio9')

track1.addEventListener("ended",function() {
     
        track2.play();

    });

track2.addEventListener("ended",function() {
     
        track3.play();
    });

track3.addEventListener("ended",function() {
     
        track4.play();
    });

track4.addEventListener("ended",function() {
     
        track5.play();
    });

track5.addEventListener("ended",function() {
     
        track6.play();
    });

track6.addEventListener("ended",function() {
     
        track7.play();
    });

track7.addEventListener("ended",function() {
     
        track8.play();
    });

track8.addEventListener("ended",function() {
     
        track9.play();
    });

