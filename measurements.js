$(document).ready(function(){

// --------------------buttons--------------------     
    
    $('.btnH').click(function(){
        $('.btnH').removeClass('active');
        $(this).addClass('active');
    });
    $('.btnW').click(function(){
        $('.btnW').removeClass('active');
        $(this).addClass('active');
    });
    $('.btnS').click(function(){
        $('.btnS').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.section').click(function(){
        $(this).siblings().removeClass('activeSection');
        $(this).addClass('activeSection');
    });
    
// --------------------weight--------------------    
    
        $(".setPounds").click(function() {
        $("#myForm").attr("data-weight", "pounds");
        $("#inputWeight").attr("placeholder", "pounds");
        $("#extra").attr("type", "hidden");
        $(".messageWeight").fadeOut(1000);
    });
    $(".setKilograms").click(function() {
        $("#myForm").attr("data-weight", "kilograms");
        $("#inputWeight").attr("placeholder", "kilograms");
        $("#extra").attr("type", "hidden");
        $(".messageWeight").fadeOut(1000);
    });
    $(".setStones").click(function() {
        $("#myForm").attr("data-weight", "stones");
        $("#inputWeight").attr("placeholder", "stones");
        $("#extra").attr("type", "number");
        $(".messageWeight").fadeOut(1000);
    });
    
   
    
    $(".inputWeight").click(function() {
        let pound = 0
        if ($("#myForm").attr("data-weight") == "kilograms") {
            pound = $("[name=answerWeight]").val()*2.20462;
        } else if ($("#myForm").attr("data-weight") == "stones") {
            pound = $("[name=answerWeight]").val()*14+$("[name=extra]").val()*1;
        } else {
            pound = $("[name=answerWeight").val()*1;
        }
    	let stone = pound * (1/14);
        let kilogram = pound * 0.453592;
        let gram = pound * 453.592
        if ($("#myForm").attr("data-weight") == "kilograms") {
            kilogram = $("[name=answerWeight]").val()*1;
            gram = $("[name=answerWeight]").val()*1000
        }
        let ounce = pound * 16
        let ton = pound * (1/2240)
        let banana = pound * 3
        

        
        $(".pounds").text(pound.toFixed(2)+ " pounds");
        $(".stones").text(stone.toFixed(2)+ " stones");
        $(".kilograms").text(kilogram.toFixed(2)+ " kilograms")
        $(".kilograms").attr("value", kilogram.toFixed(2))
        $(".grams").text(gram.toFixed(2)+ " grams")
        $(".ounces").text(ounce.toFixed(2)+ " ounces")
        $(".tons").text(ton.toFixed(2)+ " tons")
        $(".bananas").text(banana.toFixed(2)+ " medium sized bananas")
        $(".messageWeight").fadeIn(2000);
        $("[name=answerWeight]").val('');
        $("[name=extra]").val('');
    });
    
// --------------------height--------------------    
    
    $(".setInches").click(function() {
        $("#myFormHeight").attr("data-height", "inches");
        $("#inputHeight").attr("placeholder", "inches");
        $("#extraOne").attr("type", "hidden");
        $(".messageHeight").fadeOut(1000);
    });
    $(".setMetres").click(function() {
        $("#myFormHeight").attr("data-height", "metres");
        $("#inputHeight").attr("placeholder", "metres");
        $("#extraOne").attr("type", "hidden");
        $(".messageHeight").fadeOut(1000);
    });
    $(".setFeet").click(function() {
        $("#myFormHeight").attr("data-height", "feet");
        $("#inputHeight").attr("placeholder", "feet");
        $("#extraOne").attr("type", "number");
        $(".messageHeight").fadeOut(1000);
    });
    
    
    
    $(".inputHeight").click(function() {
        let inch = 0
        if ($("#myFormHeight").attr("data-height") == "metres") {
            inch = $("[name=answerHeight]").val()*39.3701;
        } else if ($("#myFormHeight").attr("data-height") == "feet") {
            inch = $("[name=answerHeight]").val()*12+$("[name=extraOne]").val()*1;
        } else {
            inch = $("[name=answerHeight").val()*1;
        }
    	let metre = inch * 0.0254;
        let feet = inch * (1/12);
        if ($("#myFormHeight").attr("data-height") == "metres") {
            metre = $("[name=answerHeight]").val()*1;
        }
        let yard = inch * (1/36); 
        let mile = inch * (1/63360);
        let spire = metre * (1/121)
        
        
        
        $(".inches").text(inch.toFixed(2)+ " inches");
        $(".metres").text(metre.toFixed(2)+ " metres");
        $(".metres").attr("value", metre.toFixed(2));
        $(".feet").text(feet.toFixed(2)+ " feet")
        $(".yards").text(yard.toFixed(2)+ " yards")
        $(".miles").text(mile.toFixed(2)+ " miles")
        $(".spires").text(spire.toFixed(2)+ " Dublin spires")
       
        $(".messageHeight").fadeIn(2000);
        $("[name=answerHeight]").val('');
        $("[name=extraOne]").val('');
    });
    
// --------------------bmi--------------------    
   
    $(".inputBMI").click(function() {
        let kilogram = $(".kilograms").attr("value")*1;
        let metre = $(".metres").attr("value")*1;
        let bmi = 0;
        if (kilogram > 0 && metre > 0) {
            bmi = kilogram/(metre*metre);
            $(".BMI").text("Your BMI is " + bmi.toFixed(2))
            $(".messageBMI").fadeIn(2000);
            $(".table").fadeIn(2000);
        } else {
            $("#error").modal();
        }
        
        
        if (bmi < 18.5) {
            $(".under").css("color","red");
        } else if (bmi >= 18.5 && bmi < 25) {
            $(".normal").css("color","red");
        } else if (bmi >= 25 && bmi < 30) {
            $(".over").css("color","red");
        } else {
            $(".obese").css("color","red");
        }
      
        
    });    
    
});