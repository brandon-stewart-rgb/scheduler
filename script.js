


// get hours etc https://linuxhint.com/how_to_get_current_date_and_time_in_javascript/

// One day (24 hours) is 86 400 000 milliseconds.


  
   // empty array variable 
   var tasks = [];
   var taskIdCounter = 0;


// update class via time of day

//  https://stackoverflow.com/questions/27348048/change-div-depending-on-hour-of-day-with-jquery



      function join(t, a, s) {
         function format(m) {
            let f = new Intl.DateTimeFormat('en', m);
            return f.format(t);
         }
         return a.map(format).join(s);
      }
      
      let a = [{month: 'long'}, {day: 'numeric'},  {year: 'numeric'}];
      let s = join(new Date, a, ' | ');
      document.getElementById('current-day').innerText = s;


     //  greater than > or less than <

      $(function() {
         var hour = (new Date).getHours() -12;
     
         $('.select').removeClass('select');
         
         if (hour > 8) {
             $('#eight').addClass('red');
         } else if (hour < 11) {
            $('#eight').addClass('blue');
         } else if (hour < 16) {
             $('#btn_3').addClass('select');
         }

         console.log(hour)
         // perhaps this works?
     
     });


     $(document).ready(function() {
      $("div.all").hide();
      var date = new Date();
      var d = date.getDay();
      var h = date.getHours();
      console.log('searching for ' + d + ' and ' + h);
      $("div.all").each(function() {
          if ( $(this).hasClass("d" + d) && $(this).hasClass("h"+h) ) {
              $(this).show();
          }
      });
  });

   //https://stackoverflow.com/questions/15083548/convert-12-hour-hhmm-am-pm-to-24-hour-hhmm/22497471

   // const convertTime12to24 = (time12h) => {
   //    const [time, modifier] = time12h.split(' ');
    
   //    let [hours, minutes] = time.split(':');
    
   //    if (hours === '12') {
   //      hours = '00';
        
   //    }
    
   //    if (modifier === 'PM') {
   //      hours = parseInt(hours, 10) + 12;
   //    }
    
  
   //    return `${hours}:${minutes}`;
   //  }
    
   //  console.log(convertTime12to24('09:00 AM'));
   //  console.log(convertTime12to24('05:06 PM'));
   //  console.log(convertTime12to24('12:00 PM'));
   //  console.log(convertTime12to24('12:00 AM'));
   //  console.log(convertTime12to24('03:00 pm'));
   //  function myFunction($param) {
   //    $param.hide();  // or whatever you want to do

     
      
   // }
   

 //  greater than > or less than <

//  if (hours > '04:00 PM') {
//    $('#eight').addClass('red');
// }


//    $.fn.myTime = function () {
//       if (time12> '09:00 AM') {
//          $('#eight').addClass('red');
//          console.log(convertTime12to24
//             )
//      } else if (hour < 11) {
//          $('#btn_2').addClass('select');
//      } else if (hour < 16) {
//          $('#btn_3').addClass('select');
//      }
//   };

      // Declares a 'scheduleList' variable that holds the parsed 'schedule' items retrieved from 'localStorage'
      // If there is nothing in 'localStorage', sets the 'scheduleList' to an empty array
      var item = JSON.parse(localStorage.getItem('text')) || [];


      // when form is clicked turns <p> into <textarea>
      $(".row").on("click", "span", function () {
         var list= $(this)
            .text()
            .trim();

         var textInput = $("<textarea>")
            .addClass("form-control form-control-lg foo")
            .val(list);

         $(this).replaceWith(textInput);
         textInput.trigger("focus");
   
      });




         //when user clicks outside the textarea turns <textarea> back to <p> with added text
         $(".row").on("blur", "textarea", function () {
            // get the textarea current value/text
            var userInput = $(this).val().trim();
            
            // recreate the p element
            var scheduleParagraphEl = $("<span>").addClass("form-control form-control-lg bleh").text(userInput);
               
               
            // replace textarea with paragraph
            $(this).replaceWith(scheduleParagraphEl);


            // add task id as a custom attribute incremented from 0 by taskIdCounter
            scheduleParagraphEl.attr("data-task-id", taskIdCounter);



            var x = [userInput, scheduleParagraphEl];

            tasks.push(x);


            // scheduleParagraphEl.id = taskIdCounter;
            // // adds any content between the parentheses to the end of the specified and empty array of 'tasks'
            // tasks.push(scheduleParagraphEl);
      

            // increase task counter for next unique id
            taskIdCounter++;

            // add text to local storage
            // localStorage.setItem('item', JSON.stringify(text));
           
         });


         




// var taskId = 1; 

// var divEl = document.createElement("div");
// divEl.className = "task-item";
// divEl.setAttribute("data-id", taskId);



