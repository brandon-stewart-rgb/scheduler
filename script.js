$(document).ready(function () {
   
   //display current day & time
   //  moment.js
   $("#current-day").text(moment().format("MMMM Do, YYYY")); 
   $("#current-hour").text(moment().format("h:mm ")); 



    // empty array to store arrays
   var schedule = [];


 

    $(".btn").on("click", function(){

        // grab the value from the text area and place that value in an object
        var userInput = $(this).siblings(".description").val();

        // get the div id from closest parent of div on click
        var timeId = $(this).parent().attr("id");

        //combine variables above and push into local storage as 'schedule'
        schedule.push( {
            description: userInput, 
            time: timeId, 
        });

        // set local storage and stringify
        localStorage.setItem("schedule", JSON.stringify(schedule));

    });



    // retrieve items from local storage and store in object, storedSchedule
    var storedSchedule = JSON.parse(localStorage.getItem("schedule"));


    // if storedSchedule is null, let storedSchedule become schedule
    if (storedSchedule !== null) {
        schedule = storedSchedule;
    };
    



    // loop over entire schedule
    for (let i = 0; i < schedule.length; i++) {

        var userDescription = schedule[i].description;
    
        // check id and place in child or .description
        $("#" + schedule[i].time).children(".description").text(userDescription);
    };
    




    function hourTracker() {
      
        // moment.js
        var currentHour = moment().hour(); 

        // loop over time blocks
         $(".time-block").each(function () {

            // variable for getting hour ids from time blocks to check for current hour and update classes
           var blockHour = parseInt($(this).attr("id").split("hour")[1]);
           
            //see if we've moved past a certain hour and the update classes
           if (blockHour < currentHour) {
               $(this).addClass("past");
               $(this).removeClass("future");
               $(this).removeClass("present");
           }
           else if (blockHour === currentHour) {
               $(this).removeClass("past");
               $(this).addClass("present");
               $(this).removeClass("future");
           }
           else {
               $(this).removeClass("present");
               $(this).removeClass("past");
               $(this).addClass("future");
           }
        });
    };


    // run the hour tracker again
    hourTracker(); 


    // clear the local storage localStorage.clear(); via button to clear the calendar and reload the page location.reload()
    $(".clear-btn").on("click", function(){
        localStorage.clear();
        location.reload();
    });
 


});