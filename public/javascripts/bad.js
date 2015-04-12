Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

$(document).ready(function(){
    var performingImages = ["420_house.jpg",
                            "adam_yells.jpg",
                            "colorado_preshow.jpg",
                            "gallery.jpg",
                            "in_a_row.jpg",
                            "retro.jpg",
                            "zeta_cello.jpg",
                            "adam_weirdmouth.jpg"];

    var posterImages = ["cleanup.jpg",
                        "gorilla.jpg",
                        "pizza_heads.jpg",
                        "republic_fest.jpg",
                        "sr_rainbow_pandas.jpg",
                        "three_links.jpg"];

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
        randomCss(pane[0]);
    };

    changeAll();

    window.setInterval(function(){
        changeRandomPane();
    }, 5000);

});
