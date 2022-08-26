// INTERNAL SCRIPT

// Day, date, time (for header).
$("#currentDay").text(moment().format('LLLL'));

// On load, the document changes updates color and adds locally stored text for each hour block, if applicable.
$(document).ready( function() {
    changeColor ();
    addText();
});

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

// Button Functionality.
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

// Function to enter and display events.
function addText () {   
    var text8A = JSON.parse(localStorage.getItem("8:00 am"));
    $("#8").val("");
    $("#8").val(text8A);

    var text9A = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(text9A);
    
    var text10A = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(text10A);
    
    var text11A = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(text11A);
    
    var text12P = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(text12P);
    
    var text1P = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(text1P);

    var text2P = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(text2P);

    var text3P = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(text3P);

    var text4P = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(text4P);

    var text5P = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(text5P);

    var text6P = JSON.parse(localStorage.getItem("6:00 pm"));
    $("#18").val("");
    $("#18").val(text6P);

    var text7P = JSON.parse(localStorage.getItem("7:00 pm"));
    $("#19").val("");
    $("#19").val(text7P);

    var text8P = JSON.parse(localStorage.getItem("8:00 pm"));
    $("#20").val("");
    $("#20").val(text8P);

};