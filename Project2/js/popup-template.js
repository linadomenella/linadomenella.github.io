//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#violet').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#violet").css("background-color", "#783a96");
        });
});

$(document).ready(function (){
    $('#orange').click(function() {
        $("#orange").css("background-color", "#fba919")
        });
});

$(document).ready(function (){
    $('#green').click(function() {
        $("#green").css("background-color", "#0fa64a")
        });
});

$(document).ready(function (){
    $('#redorange').click(function() {
        $("#redorange").css("background-color", "#f47b20")
        });
});

$(document).ready(function (){
    $('#yelloworange').click(function() {
        $("#yelloworange").css("background-color", "#fed304")
        });
});

$(document).ready(function (){
    $('#yellowgreen').click(function() {
        $("#yellowgreen").css("background-color", "#abd037")
        });
});

$(document).ready(function (){
    $('#bluegreen').click(function() {
        $("#bluegreen").css("background-color", "#077aab")
        });
});

$(document).ready(function (){
    $('#blueviolet').click(function() {
        $("#blueviolet").css("background-color", "#6e4fa0")
        });
});

$(document).ready(function (){
    $('#violetred').click(function() {
        $("#violetred").css("background-color", "#aa2178")
        });
});

$(document).ready(function (){
    
    $('#colorwheel-button').click(function() {
        $("#primarytriangle").toggleClass("visible");
        });
});

$(document).ready(function (){
    
    $('#colorwheel-button').click(function() {
        $("#secondarytriangle").toggleClass("visible");
        });
});


//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#place-button-name-here').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#place-modal-name-here").toggleClass("visible");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#place-modal_close-icon-name-here').click(function() {
        $("#place-modal-name-here").toggleClass("visible")
        });
});