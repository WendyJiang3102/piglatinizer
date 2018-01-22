// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function(){
  
  $("input").keyup(function(event){
    if (event.keyCode === 13){
      $("#submit").click();
    }
  });
  
  $("#submit").click(function(){
    var a = $("#word").val().split(" ");

    function sentenceToPigLatin(sentence){
      return sentence + "Mmm";
    }
    
    // message = ['jennifer', 'says', 'meow']
    var b = '';
    for(var i = 0; i < a.length; i = i + 1){
      b += sentenceToPigLatin(a[i]);
    }
    
    $("#result").html(b);

  });
  
});
  

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


