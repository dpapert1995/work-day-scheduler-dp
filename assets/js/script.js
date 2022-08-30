// INTERNAL SCRIPT

// Day, date, time (for header).
$("#currentDay").text(moment().format('LLLL'));

// On load, the document changes updates color and adds locally stored text for each hour block, if applicable.
$(document).ready( function() {
    changeColor ();
    addText();
})

// Function to enter and display events.
function addText () {   

    var text9A = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9A").val(text9A);
    
    var text10A = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10A").val(text10A);
    
    var text11A = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11A").val(text11A);
    
    var text12P = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12P").val(text12P);
    
    var text1P = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#1P").val(text1P);

    var text2P = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#2P").val(text2P);

    var text3P = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#3P").val(text3P);

    var text4P = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#4P").val(text4P);

    var text5P = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#5P").val(text5P);

}

// Function to change the color of the blocks.
function changeColor () {
    
    var currentTime = moment().hours();
       
// Changed blocks to past, present, or future depending on the value of moment, or current time.
    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// Button Variables.
var eventText;
var eventTime;

// Save button function.
$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));
    changeColor ();
    addText ();  
});

// Delete button function.
  $(".deleteBtn").click(function() {
        eventText = $(this).siblings(".input").val("");
        eventText = $(this).siblings(".input").val();
        eventTime = $(this).siblings(".hour").text();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
  
    changeColor ();
    addText ();
});
