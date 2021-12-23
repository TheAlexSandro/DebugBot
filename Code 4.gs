/******************* FUNCTION GET DATE *******************/

function dateCon(UNIX_timestamp, ribuan) {
  ribuan = (typeof ribuan == 'undefined') ? false : true;

  let a = new Date(UNIX_timestamp);
  if (ribuan) {
    a = new Date(UNIX_timestamp * 1000);
  }

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();

  var date = date + ' ' + month + ' ' + year;
  return date;
}

/******************* FUNCTION GET TIME *******************/

function timeConverter(UNIX_timestamp, ribuan) {
  ribuan = (typeof ribuan == 'undefined') ? false : true;

  let a = new Date(UNIX_timestamp);
  if (ribuan) {
    a = new Date(UNIX_timestamp * 1000);
  }

  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  var time = hour + ':' + min + ':' + sec;
  return time;
}

/******************* FUNCTION GET DAY *******************/

function dayCon(UNIX_timestamp, ribuan) {
  ribuan = (typeof ribuan == 'undefined') ? false : true;

  let a = new Date(UNIX_timestamp);
  if (ribuan) {
    a = new Date(UNIX_timestamp * 1000);
  }

  var hari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var day = hari[a.getDay()];

  var tgl = day
  return tgl;
}
