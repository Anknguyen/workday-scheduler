
// retrives messages for each hour
retrieve('id9');
retrieve('id10');
retrieve('id11');
retrieve('id12');
retrieve('id1');
retrieve('id2');
retrieve('id3');
retrieve('id4');
retrieve('id5');

function retrieve(id){
  document.getElementById(id).innerHTML = localStorage.getItem(id);
}

// saves messages to local storage
function save(id){
  var textValue = document.getElementById(id).value
  console.log(textValue)
  localStorage.setItem(id, textValue);
}


$(function () {

  var hr9 = document.getElementById("hour-9");
  var hr10 = document.getElementById("hour-10");
  var hr11 = document.getElementById("hour-11");
  var hr12 = document.getElementById("hour-12");
  var hr1 = document.getElementById("hour-1");
  var hr2 = document.getElementById("hour-2");
  var hr3 = document.getElementById("hour-3");
  var hr4 = document.getElementById("hour-4");
  var hr5 = document.getElementById("hour-5");

  
  // gets current time using day js
  var currentTime = dayjs().hour()
  document.getElementById("currentDay").innerHTML = dayjs().format('dddd, MMMM D, YYYY')

  // Checks if it is the current time
  // 9 AM
  if(currentTime == 9)
  {
    hr9.classList.add("present");
  }
  // 10 AM
  else if (currentTime == 10)
  {
    hr10.classList.add("present");
  }
  // 11 AM
  else if (currentTime == 11)
  {
    hr11.classList.add("present");
  }
  // 12 AM
  else if (currentTime == 12)
  {
    hr12.classList.add("present");
  }
  // 1 PM
  else if (currentTime == 13)
  {
    hr1.classList.add("present");
  }
  // 2 PM
  else if (currentTime == 14)
  {
    hr2.classList.add("present");
  }
  // 3 PM
  else if (currentTime == 15)
  {
    hr3.classList.add("present");
  }
  // 4 PM
  else if (currentTime == 16)
  {
    hr4.classList.add("present");
  }
  // 5 PM
  else if (currentTime == 17)
  {
    hr5.classList.add("present");
  }


  // Checks if time is in the past or future
  if(currentTime != 9)
  {
    if(currentTime > 9){
      hr9.classList.add("past");
    }
    else{
      hr9.classList.add("future");
    }
  }
  if(currentTime != 10)
  {
    if(currentTime > 10){
      hr10.classList.add("past");
    }
    else{
      hr10.classList.add("future");
    }
  }
  if(currentTime != 11)
  {
    if(currentTime > 11){
      hr11.classList.add("past");
    }
    else{
      hr11.classList.add("future");
    }
  }
  if(currentTime != 12)
  {
    if(currentTime > 12){
      hr12.classList.add("past");
    }
    else{
      hr12.classList.add("future");
    }
  }
  if(currentTime != 13)
  {
    if(currentTime > 13){
      hr1.classList.add("past");
    }
    else{
      hr1.classList.add("future");
    }
  }
  if(currentTime != 14)
  {
    if(currentTime > 14){
      hr2.classList.add("past");
    }
    else{
      hr2.classList.add("future");
    }
  }
  if(currentTime != 15)
  {
    if(currentTime > 15){
      hr3.classList.add("past");
    }
    else{
      hr3.classList.add("future");
    }
  }
  if(currentTime != 16)
  {
    if(currentTime > 16){
      hr4.classList.add("past");
    }
    else{
      hr4.classList.add("future");
    }
  }
  if(currentTime != 17)
  {
    if(currentTime > 17){
      hr5.classList.add("past");
    }
    else{
      hr5.classList.add("future");
    }
  }             
});
