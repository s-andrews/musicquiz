$(document).ready(function(){


    // Load in the clips and place them in the document
    $.getJSON('clips.json', function(clips) {
        //clips is the JSON string
        clipdiv = $("#clips")

        for (i=0; i < clips.length; i++) {
            clipdiv.append("<div class=\"clip text-center\">Clip "+(i+1)+": <audio controls><source src=\""+clips[i]["file"]+"\" type=\"audio/mp3\"></audio> Answer: <select class=\"answers\"></select></div>")
        }
        

        $.getJSON('suggestions.json', function(suggestions) {

            allanswers = $(".answers")
            allanswers.append("<option value=\"\"></option>")

            for (i=0; i < suggestions.length; i++) {
                allanswers.append("<option value=\""+suggestions[i]["index"]+"\">"+suggestions[i]["name"]+"</option>")
            }
            
    
            allanswers.select2({width: "10em"})
        });
    

    });

    // Make the suggestions work


    // Make the answers button work


  }); 