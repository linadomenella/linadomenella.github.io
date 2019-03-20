//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#purple').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#purple").css("background-color", "#783a96");
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
    $('#yelloworangebutton').click(function() {
        $("#yelloworangebutton").css("background-color", "#fed304")
        });
});

$(document).ready(function (){
    $('#yellowgreenbutton').click(function() {
        $("#yellowgreenbutton").css("background-color", "#abd037")
        });
});

$(document).ready(function (){
    $('#bluegreenbutton').click(function() {
        $("#bluegreenbutton").css("background-color", "#077aab")
        });
});

$(document).ready(function (){
    $('#bluevioletbutton').click(function() {
        $("#bluevioletbutton").css("background-color", "#6e4fa0")
        });
});

$(document).ready(function (){
    $('#violetredbutton').click(function() {
        $("#violetredbutton").css("background-color", "#aa2178")
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