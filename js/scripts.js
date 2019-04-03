 // User-interface Logic

$(document).ready(function(){
  function isVowel(myChar, vowels){
    var isV = false;
    for(var i = 1; i < vowels.length; i++){
      if(myChar === vowels[i]){
        isV = true;
        break;
      }
    }
    return isV;
  };
  // function isVowelTrue(myChar, voweltrue){
  //   var isV = false;
  //   for(var i = 0; i < voweltrue.length; i++){
  //     if(myChar === voweltrue[i]){
  //       isV = true;
  //       break;
  //     }
  //   }
  //   return isV;
  // };


  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val().toLowerCase();

    var vowels = ["u", "e", "o", "i", "a"];
    var voweltrue = ["e", "o", "i", "a"]
    var cons = []
    var vowel = false;
    var addWay = false;


    for (var i = 0; i < vowels.length; i++){
      if ( word[0] == vowels[i]) {
        addWay = true;
      }
    }

    if (addWay === true) {
      $("#result").append(word + "way");
    } else {
      for (var e = 0; e < word.length; e++) {
        vowel = isVowel(word[e], vowels);

        if (!vowel) {
          cons.push(word[e]);

        }else{
          break;
        }
      }
      word = word.slice(cons.length);
      $("#result").append(word + cons.join('') + "ay");
    }

    $("#result").show();
  });
});





// Business Logic
