
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours (function)
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // use the logic here to get the  color changed
// WHEto N I click into a timeblock
    // THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// use of set and get for the the local storage value
// WHEN I refresh the page
// THEN the saved events persist   get the set value from the local storage

// i need 

$(document).ready(function(){
    // console.log("hello");


    var scheduleContent;
    var businessHours = [ '9 AM',"10 AM", "11 AM","12 PM","1 PM","2 PM","3 PM"];
    var indx = 0;
    var appointmentDetailText = "";
    var txtValue;
    var timeDescription;

  
    // FUNCTION TO DISPLAY THE CURRENT DATE WHEN THE APP IS OPENED
    // function showWeather(cityName){
    //  displayTime(){

         //  ISO format
    // '2018-04-04T16:00:00.000Z'
    // If no date is supplied to days(), it assumes NOW
    var defFormat = dayjs().format();
    // You can make a variable for any date object you need
    var garyBirthday = dayjs("1965-12-07T16:00:00.000Z")
    var anyOldDay = dayjs("1995-06-07T16:00:00.000Z");
    // You can format any date
    var format1 = garyBirthday.format("YYYY, MM, DD");
    // Determine if one date is after another
    var isAfter = garyBirthday.isAfter(anyOldDay, 'hour');
    console.log(isAfter);
        
  

    // create the actual page element for the user
    for (var i = 0; i<businessHours.length;i++) {
        var numberContainer = $("<div>");
        var label = $("<label>")
        label.text(businessHours[i]);
        numberContainer.append(label)
        $("#hour").append(numberContainer);

        // console.log(numberContainer);

       var  appointmentDetailEl = $("<input>");
        appointmentDetailEl.attr("placeholder","text..");
        numberContainer.append(appointmentDetailEl);
         txtValue = appointmentDetailEl.text();
        var saveBtn = $("<button>");
        saveBtn.text("SAVE");
        numberContainer.append(saveBtn);
        
        }

        // saving to the local storage
        function storeData(){
            
            saveBtn.on("click",function(txtValue){
            if (txtValue !== null){
            localStorage.setItem("timeDescription", txtValue);
            }  else{
                alert("no input");
            } 
              
            })
        }

        // function that shows the plan for the time even after the refresh
        function displayOnScreen(){
            var description = parseInt(localStorage.getItem("timeDescription"));
            appointmentDetailEl.val(description);
            

        }
        


        // create a function to save the data in local storage so that it stays there even after refresh

        // saveBtn.on("click",function(){
        //    console.log("hello world");
        // })

       

        
    
    


    // create a function to change colour of the actual hour and past and the future



    // create a function to save the data in local storage so that it stays there even after refresh
    


});
