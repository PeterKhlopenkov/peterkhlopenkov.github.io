$(document).ready(function() {

    $('#fullpage').fullpage({

        anchors:["namepage", "TheVeldt", "RapBeat","MoreInfo"],
        scrollingSpeed: 1000,
        scrollOverflow: true,
        scrollBar:false,
        slidesNavigation: false,
        controlArrows: false,

        onLeave: function(index, nextIndex){
            var leavingSection = $(this);

            if(index === 1)
                $(".theVeldtIntro").fadeTo(300,0);

            if(nextIndex===1){
                return false //prevents viewer from scrolling up to welcome page
            } else if(nextIndex===2){
                $("#secondPage").fadeTo(1000,1);
                $(".theVeldtFull").fadeTo(0,1);
                $("#gameplayFootageFull").fadeTo(1000,1);
                $(".gameplayTag").fadeTo(1000,0.5);
                $(".rapBeatBackground").fadeTo(1000,0);
                document.getElementById("gameplayFootageFull").play();
            } else if(nextIndex===3){
                $("#gameplayFootageFull").fadeTo(1000,0);
                $("#thirdPage").fadeTo(1000,1);
                $(".gameplayTag").fadeTo(1000,0);
                $(".rapBeatBackground").fadeTo(1000,1);
            } else if(nextIndex===4){
                $("#fourthPage").css('opacity','1');
                $(".gameplayTag").fadeTo(1000,0);
                $("#gameplayFootageFull").fadeTo(300,0);
                $(".rapBeatBackground").fadeTo(300,0);
            }

            leavingSection.fadeTo(300,0);
        }
    });

    $(".active").fadeTo(2000,1); /*fade in active section on document load*/

});

function scrollDown() {
    $.fn.fullpage.moveSectionDown();
}

