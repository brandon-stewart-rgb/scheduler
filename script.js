$(document).ready(function () {
   

   //display current day & time.
   //  moment.js
   $("#current-day").text(moment().format("MMMM Do, YYYY")); 
   $("#current-hour").text(moment().format("h:mm ")); 

     var schedule = [];

        $(".btn").on("click", function(){
            var userInput = $(this).siblings(".description").val();
            var timeId = $(this).parent().attr("id");

            schedule.push( {
                description: userInput, 
                time: timeId, 
            });

            localStorage.setItem("schedule", JSON.stringify(schedule));
        })



var storedSchedule = JSON.parse(localStorage.getItem("schedule"));

if (storedSchedule !== null) {
    schedule = storedSchedule;
}
 

// loop over schedule
for (let i = 0; i < schedule.length; i++) {
    var userDescription = schedule[i].description;
    $("#" + schedule[i].time).children(".description").text(userDescription);
  }
    


   function hourTracker() {
       //get current number of hours.
       // moment.js
       var currentHour = moment().hour(); 

       // loop over time blocks
       $(".time-block").each(function () {
           var blockHour = parseInt($(this).attr("id").split("hour")[1]);
           

           //check if we've moved past this time, click into css/html given classes of past, present, or future
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
       })
   }
   hourTracker(); 
});