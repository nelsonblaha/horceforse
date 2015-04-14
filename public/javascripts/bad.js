Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

$(document).ready(function(){
    var bad = function(text) {
      var pairs = [
        ["o", "ö"]
      ];
      var pear = pairs.randomElement();
      return text.replace(pear[0], pear[1]);
    };

    var performingImages = ["420_house.jpg",
                            "adam_yells.jpg",
                            "colorado_preshow.jpg",
                            "gallery.jpg",
                            "in_a_row.jpg",
                            "retro.jpg",
                            "zeta_cello.jpg",
                            "adam_weirdmouth.jpg",
                            "observer_2bd.jpg"];

    var posterImages = ["cleanup.jpg",
                        "gorilla.jpg",
                        "pizza_heads.jpg",
                        "republic_fest.jpg",
                        "sr_rainbow_pandas.jpg",
                        "three_links.jpg",
                        "where_will_you_be.jpeg"];

    var otherImages = ["abduction.jpg",
                       "adam_glasses.jpg",
                       "ben.jpg",
                       "claw_yellow_shirt.jpg",
                       "grudge.jpg",
                       "scaryman_taylor.png",
                       "horse_fingers.jpg",
                       "jackie_thumb.jpg"];

    var randomImageChange = function(category, images){
        $("img#"+category).attr("src", "assets/images/"+category+"/"+images.randomElement());
    };

    $("img#performing").click(function(e){
        randomImageChange("performing", performingImages);
    });

    $("img#showposters").click(function(e){
        randomImageChange("showposters", posterImages);
    });

    $("img#other").click(function(e){
        randomImageChange("other", otherImages);
    });

    var changeAll = function(){
        randomImageChange("performing", performingImages);
        randomImageChange("showposters", posterImages);
        randomImageChange("other", otherImages);
    };

    var randomCss = function(id){
        var attributes = ["margin-top", "margin-right", "width", "height", "left", "right"];
        var value = Math.floor((Math.random() * 500));
        var i = Math.floor((Math.random() * attributes.length));
        console.log("changing "+attributes[i]);
        ("img#"+id).attr(attributes[i], value);
    };

    var changeRandomPane = function(){
        var i = Math.floor((Math.random() * 3));
        console.log(i);
        var panes = [
                     ["performing", performingImages],
                     ["showposters", posterImages],
                     ["other", otherImages]
                    ];
        var pane = panes[i];
        console.log(pane);
        randomImageChange(pane[0], pane[1]);
        //randomCss(pane[0]);
    };

    changeAll();

    window.setInterval(function(){
        changeRandomPane();
    }, 5000);

    //window.setInterval(function(){
    //    var count = $("div#links").find('a').length;
    //    var i = Math.floor((Math.random() * count) + 1);
    //    var element = $("div#links").find("a:nth-of-type("+i+")");
    //    console.log("text: "+element.text());
    //    //element.text(bad(element.text()));
    //    console.log(bad(element.text()));
    //}, 1000);

    //window.setInterval(function(){
    //    var color = '#' + (function co(lor){   return (lor +=
    //            [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    //        && (lor.length == 6) ?  lor : co(lor); })('');
    //    $('#controls-wrapper').css("background-color", color);
    //    $('h1').css("color", color);
    //
    //    var i = Math.floor((Math.random() * 6) + 1);
    //    var color = '#' + (function co(lor){   return (lor +=
    //            [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    //        && (lor.length == 6) ?  lor : co(lor); })('');
    //    $('div#music:nth-child(' + i + ')').css("color", color);
    //}, 1000)



});
