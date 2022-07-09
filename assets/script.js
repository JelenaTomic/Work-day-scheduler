// current date and time on top of the planer
var currentDate = moment (). format('MMMM Do YYYY');
$("currentDay").text(currentDate);

// time variables
var time = $(".hour");
var timeNow = parseInt(moment().format("H"));

// deciding what time it is and what color will column be painted depending on the time
$(time).each(function(i,hour){
    var hourBlock = parseInt($(this).attr("id"));
    if(hourBlock === timeNow ) {
        $(this).next().addClass("present");
    }
     else if( hourBlock > timeNow) { 
     $(this).next().addClass("future");
    }
    else (hourBlock<timeNow) 
    { $(this).next().addClass("past");}
    
});