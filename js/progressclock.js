$(document).ready(function() {
  setInterval(function() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var dw = d.getDay();
    var dd = d.getDate();
    var mo = d.getMonth();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    $(weekday).width(((dw+1)/7)*100 +"%");
    $(month).width(((mo+1)/12)*100 +"%");

    switch(mo) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        $(day).width(((dd)/31)*100 +"%");
        break;
      case 3:
      case 5:
      case 8:
      case 10:
        $(day).width(((dd)/30)*100 +"%");
        break;
      default:
        $(day).width(((dd)/28)*100 +"%");
    }

    $(hour).width(((h+1)/24)*100 +"%");
    $(minute).width(((m+1)/60)*100 +"%");
    $(second).width(((s+1)/60)*100 +"%");
    //console.log(mo + " " + dd + " " + dw + " " + h + " " + m + " " + s );

    $(weekdaytext).text(days[dw]);
    $(monthtext).text(months[mo]);
    $(daytext).text(dd + "th");
    $(hourtext).text(h + " h");
    $(minutetext).text(m + " m");
    $(secondtext).text(s + " s");

  }, 500);

});
