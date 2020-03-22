$(document).ready(function(){

    // Load in the clips and place them in the document
    $.getJSON('clips.json', function(clips) {
        //clips is the JSON string
        for (i=0; i < clips.length; i++) {
            console.log(clips[i]["file"])
        }
        

    });

    // Make the suggestions work


    // Make the answers button work


  }); 