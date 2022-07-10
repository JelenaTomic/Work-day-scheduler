
// Current day at top of planner using Moment.js
var currentDate = moment().format("MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDate);

/// Set variables for time block section, use Moment.js for current time
var timeBlock = $(".hour");
var timeNow = parseInt(moment().format("H"));

// Decide if current time is past, present, or future in order to apply corresponding color to time blocks
$(timeBlock).each(function (i, hour) {
    var hourBlock = parseInt($(this).attr("id"));
    if (hourBlock === timeNow) {
        $(this).next().addClass("present");
    }
    else if (hourBlock > timeNow) {
        $(this).next().addClass("future"); 
    }
    else if (hourBlock < timeNow) {
        $(this).next().addClass("past");
    }
});

// Save calendar item to local storage when save button is clicked
$(".saveBtn").on("click", function(event) {
  var calItem = event.target.parentElement.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.parentElement.attributes[0].value, calItem);
});

// Clear button to empty local storage and reload the page
$(".clearBtn").on("click", function(event) {
    window.localStorage.clear();
    document.location.reload();
});

// Function to populate calendar items if they are in local storage
$(document).ready(function () {
    if (localStorage["saveEight"] !== null && localStorage["saveEight"] !== undefined) {
    var calItemEight = $("<p>" + localStorage["saveEight"] + "</p>");
     $("#eight").append(calItemEight[0].innerText);
    } 
    else {
    ("");
     }
    if (localStorage["saveNine"] !== null && localStorage["saveNine"] !== undefined) {
      var calItemNine = $("<p>" + localStorage["saveNine"] + "</p>");
      $("#nine").append(calItemNine[0].innerText);
    } 
    else {
      ("");
    }
    if (localStorage["saveTen"] !== null && localStorage["saveTen"] !== undefined) {
        var calItemTen = $("<p>" + localStorage["saveTen"] + "</p>");
        $("#ten").append(calItemTen[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveEleven"] !== null && localStorage["saveEleven"] !== undefined) {
        var calItemEleven = $("<p>" + localStorage["saveEleven"] + "</p>");
        $("#eleven").append(calItemEleven[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveNoon"] !== null && localStorage["saveNoon"] !== undefined) {
        var calItemNoon = $("<p>" + localStorage["saveNoon"] + "</p>");
        $("#noon").append(calItemNoon[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveOne"] !== null && localStorage["saveOne"] !== undefined) {
        var calItemOne = $("<p>" + localStorage["saveOne"] + "</p>");
        $("#one").append(calItemOne[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveTwo"] !== null && localStorage["saveTwo"] !== undefined) {
        var calItemTwo = $("<p>" + localStorage["saveTwo"] + "</p>");
        $("#two").append(calItemTwo[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveThree"] !== null && localStorage["saveThree"] !== undefined) {
        var calItemThree = $("<p>" + localStorage["saveThree"] + "</p>");
        $("#three").append(calItemThree[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveFour"] !== null && localStorage["saveFour"] !== undefined) {
        var calItemFour = $("<p>" + localStorage["saveFour"] + "</p>");
        $("#four").append(calItemFour[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveFive"] !== null && localStorage["saveFive"] !== undefined) {
        var calItemFive = $("<p>" + localStorage["saveFive"] + "</p>");
        $("#five").append(calItemFive[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveSix"] !== null && localStorage["saveSix"] !== undefined) {
        var calItemSix = $("<p>" + localStorage["saveSix"] + "</p>");
        $("#six").append(calItemSix[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveSeven"] !== null && localStorage["saveSeven"] !== undefined) {
        var calItemSeven = $("<p>" + localStorage["saveSeven"] + "</p>");
        $("#seven").append(calItemSeven[0].innerText);
      } 
      else {
        ("");
      }
      if (localStorage["saveEightPm"] !== null && localStorage["saveEightPm"] !== undefined) {
        var calItemEightPm = $(`<p>${localStorage["saveEightPm"]}</p>`);
        $("#eightPm").append(calItemEightPm[0].innerText);
      } 
      else {
        ("");
      }
});