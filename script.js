
// wait for everything to load before we do anything
// $(document).ready(function(){

// });
// get hours etc https://linuxhint.com/how_to_get_current_date_and_time_in_javascript/

// One day (24 hours) is 86 400 000 milliseconds.



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
