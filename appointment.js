


$(document).ready(function(){
    // console.log("hello");


    var hours =[9, 10,11,12,1,2,3,]
    var businessHours = [ '9 AM',"10 AM", "11 AM","12 PM","1 PM","2 PM","3 PM"];
    var indx = 0;
    var appointmentDetailText = "";
    var txtValue;
    var timeDescription;

  
    // FUNCTION TO DISPLAY THE CURRENT DATE WHEN THE APP IS OPENED
    
    var now = dayjs().format("YYYY, MM, DD");
    
    $(".lead").append(now);
        
  

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
        var txtValue = appointmentDetailEl.val();
        appointmentDetailEl.attr("value",txtValue);
        numberContainer.append(appointmentDetailEl);
        var saveBtn = $("<button>");
        saveBtn.text("SAVE");
        numberContainer.append(saveBtn);

        
        }

        localStorage.setItem("timeDescription", JSON.stringify(txtValue));
        

        // saving to the local storage
        // for (var i = 0; i<businessHours.length;i++) {
            saveBtn.on("click", function(){
                if(txtValue !== null){
                    localStorage.setItem("plan", JSON.stringify(txtValue));
                }else{
                    alert("please enter something")
                }
            })
    
            
        

        // function that shows the description for that time
        function displayOnScreen(){
            var description = parseInt(localStorage.getItem("timeDescription"));
            appointmentDetailEl.append(description);
            

        }
        

    


});
