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

