$(document).ready(function(){
	$("#formOne").submit(function(event) {
		event.preventDefault();
		var userString = $("#userString").val();
		console.log(userString);
        
        var StringAsArray = userString.toLowerCase().split("");
        console.log(StringAsArray);

        function remove(array) {
            for (var i=0; i < array.length; i++) {
            if ([" ", ".", "!", "?", "\"", "\'"].includes(array[i])) {
                array.splice(i, 1);
                }
            }
            return array;
        };
        console.log(remove(StringAsArray));
       
        var forwardString = remove(StringAsArray).join("");
        console.log(forwardString);
        
        var backwardString = remove(StringAsArray).reverse().join("");
        console.log(backwardString);

        var checker = function() {
            if (forwardString === backwardString) {
                return true;
            } else
                return false;
        };
        
        $("#output").html(checker());
   
	});
});

 // var backwardString = StringAsArray.reverse();
    // console.log(backwardString);
    
    // var concatedString = StringAsArray.concat(` ${backwardString.join("")}`).join("");       
    // console.log(concatedString);


/* 
Prompt user to enter string.

Take in string vale and use .split("") to make it into and array.

(Reverse that array, concat it to the original and .join() it? display this in output div.)


 */