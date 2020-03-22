$(document).ready(function(){

    // Load in the clips and place them in the document
    $.getJSON('clips.json', function(clips) {
        //clips is the JSON string
        clipdiv = $("#clips")

        for (i=0; i < clips.length; i++) {
            clipdiv.append("<div class=\"clip text-center\">Clip "+(i+1)+": <audio controls><source src=\""+clips[i]["file"]+"\" type=\"audio/mp3\"></audio> Answer: <input type=\"text\" size=\"40\"></div>")
        }
        

    });

    // Make the suggestions work


    // Make the answers button work


  }); 