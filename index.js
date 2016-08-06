$(document).ready(function(){

$("#calculateButton").click(function() {
    var loanBalance = $("#mortgageLoanBalanceInput").val();
    var loanTerm = $("#loanTermInput").val();
    var interestRate = $("#aprInput").val();
    var period = $("#period option:selected").val();
    var numberOfPayments = loanTerm * period;
    var monthlyInterestRate = (interestRate / 100) / period;
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
    var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
    var monthlyPayment = Math.round((loanBalance * interestQuotient) * 100) / 100;


	$("#allInputs input").each(function() {
        var theInputs = $(this).val();
        if (theInputs <= 0) { 
        	alert("Please only input numbers greater than zero. Thank you."); 
        } else if (isNaN(theInputs)) { 
        	alert("Sorry, letters are not an accepted value. Please type in a number. (ex: 100)"); 
        } else if (theInputs === "") { 
        	alert("Please make sure all fields are filled out."); 
    	} else { 
    		$("#textGoesHere").show().html('Your monthly interest rate is<br> <b><font size=28px>$' + monthlyPayment + '</b>'); 
   		}
    });

});

});
