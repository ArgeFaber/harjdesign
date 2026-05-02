/*/////////////////////////////////////////////////////*/
/*//////////////--Javascript only Home--///////////////*/
/*/////////////////////////////////////////////////////*/


/*/////////////--Check Mobile Service Module--////////////////*/

var wWidth = jQuery(window).width();

if (wWidth < '1025') {
    // console.log("rimosso il modulo desktop");
    // jQuery('#animation-section').remove();
} else {
    // console.log("rimosso il modulo mobile");
    // jQuery('#service-homepage').remove();

    /*//////////////--Javascript ScrollMagic Sezione Home--///////////////*/
    var controller = new ScrollMagic.Controller();

    // Scene Handler
    //var homepage = new ScrollMagic.Scene({
    //  triggerElement: "#animation-section", // point of execution
    //  duration: jQuery(window).height()*2, // pin element for the window height - 1
    //  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    //})
    //.setPin("#fixed-animation-container") // the element we want to pin
    //.addIndicators()
    //.addTo(controller);

    /*//////////////--Javascript ScrollMagic Sezione parallax--///////////////*/

    // Scene Handler
    // Scene Handler
    var serviceFirstStep = new ScrollMagic.Scene({
        triggerElement: "#service-step-1",
        duration: jQuery(window).height() / 2,
        triggerHook: 0,
    })

        .setPin("#service-step-1")
        //.addIndicators()
        .addTo(controller);

    //Servizi homepage step 2 blocco di sinistra

    var tween = TweenMax.staggerFromTo("#service-step-2 .animotion-left-to-right", 2, {left: -(jQuery(window).width() / 2), opacity: 0}, {left: 0, opacity: 1}, 0.15);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#service-step-2",
        duration: (jQuery(window).height() / 2),
        triggerHook: 0.5,
    })

        .setTween(tween)
        //.addIndicators({name: "Service step 2"}) // add indicators (requires plugin)
        .addTo(controller);

    //Servizi homepage step 2 blocco di destra

    var tween2 = TweenMax.staggerFromTo("#service-step-2 .animotion-right-to-left", 2, {left: (jQuery(window).width() / 2), opacity: 0}, {left: 0, opacity: 1}, 0.15);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#service-step-2",
        duration: (jQuery(window).height() / 2),
        triggerHook: 0.5,
    })

        .setTween(tween2)
        //.addIndicators({name: "Service step 2"}) // add indicators (requires plugin)
        .addTo(controller);

    //Servizi homepage step 2 fissaggio step

    // Scene Handler
    var serviceFirstStep = new ScrollMagic.Scene({
        triggerElement: "#service-step-2",
        duration: jQuery(window).height() / 2,
        triggerHook: 0,
    })

        .setPin("#service-step-2")
        //.addIndicators()
        .addTo(controller);

    //Servizi homepage step 3 blocco di sinistra

    var tween = TweenMax.staggerFromTo("#service-step-3 .animotion-top-to-bottom", 2, {top: -(jQuery(window).width() / 2), opacity: 0}, {top: 0, opacity: 1}, 0.15);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#service-step-3",
        duration: (jQuery(window).height() / 2),
        triggerHook: 0.5,
    })

        .setTween(tween)
        //.addIndicators({name: "Service step 3"}) // add indicators (requires plugin)
        .addTo(controller);

    var tween = TweenMax.staggerFromTo("#service-step-3 .animotion-bottom-to-top", 2, {top: (jQuery(window).width() / 2), opacity: 0}, {top: 0, opacity: 1}, 0.15);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#service-step-3",
        duration: (jQuery(window).height() / 2),
        triggerHook: 0.5,
    })

        .setTween(tween)
        //.addIndicators({name: "Service step 3"}) // add indicators (requires plugin)
        .addTo(controller);

    //Servizi homepage step 3 fissaggio step

    // Scene Handler
    var serviceSecondStep = new ScrollMagic.Scene({
        triggerElement: "#service-step-3",
        duration: jQuery(window).height() / 2,
        triggerHook: 0,
    })

        .setPin("#service-step-3")
        //.addIndicators()
        .addTo(controller);

    //Servizi homepage step 4 blocco di sinistra

    var tween = TweenMax.staggerFromTo("#service-step-4 .animotion-left-to-right", 2, {left: -(jQuery(window).width() / 2), opacity: 0}, {left: 0, opacity: 1}, 0.15);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#service-step-4",
        duration: (jQuery(window).height() / 2),
        triggerHook: 0.5,
    })

        .setTween(tween)
        //.addIndicators({name: "Service step 4"}) // add indicators (requires plugin)
        .addTo(controller);

    //Servizi homepage step 4 blocco di destra

    var tween2 = TweenMax.staggerFromTo("#service-step-4 .animotion-right-to-left", 2, {left: (jQuery(window).width() / 2), opacity: 0}, {left: 0, opacity: 1}, 0.15);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#service-step-4",
        duration: (jQuery(window).height() / 2),
        triggerHook: 0.5,
    })

        .setTween(tween2)
        //.addIndicators({name: "Service step 4"}) // add indicators (requires plugin)
        .addTo(controller);

    //Servizi homepage step 4 fissaggio step

    // Scene Handler
    var serviceThirdStep = new ScrollMagic.Scene({
        triggerElement: "#service-step-4",
        duration: jQuery(window).height() / 2,
        triggerHook: 0,
    })

        .setPin("#service-step-4")
        //.addIndicators()
        .addTo(controller);

    /*/////////////////////////////////////////////////////////////////////////////////////*/
    /*//////////////////////////////--Background Animazione--//////////////////////////////*/
    /*/////////////////////////////////////////////////////////////////////////////////////*/

    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "1", duration: jQuery(window).height() * 6}});0

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#fixed-animation-container"})
            .setTween("#fixed-animation-container > .parallax-cubes-lvl1", {y: "40%", ease: Linear.easeNone})
            //.addIndicators()
            .addTo(controller);

    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "1", duration: jQuery(window).height() * 6}});0

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#fixed-animation-container"})
            .setTween("#fixed-animation-container > .parallax-cubes-lvl2", {y: "60%", ease: Linear.easeNone})
            //.addIndicators()
            .addTo(controller);

    // build scenes
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "1", duration: jQuery(window).height() * 6}});0

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#fixed-animation-container"})
            .setTween("#fixed-animation-container > .parallax-cubes-lvl3", {y: "80%", ease: Linear.easeNone})
            //.addIndicators()
            .addTo(controller);
}

jQuery(document).ready(function(){
    jQuery('#brand-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            320:{
                items:2
            },
            360:{
                items:3
            },
            375:{
                items:3
            },
            414:{
                items:3
            },
            479:{
                items:3
            },
            768:{
                items:4
            },
            1024:{
                items:6
            },
            1280:{
                items:6
            }
        }
    });
});

//Home Title Animation

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
        cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
        nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2500);
