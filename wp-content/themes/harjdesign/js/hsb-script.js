/*////////--PRELOADER--//////////*/

setTimeout(function(){
    jQuery('#preloader').addClass('preloader-in');
},100);

setTimeout(function(){
    jQuery('.preloader-animotion').addClass('active-animation');
},400);

jQuery(window).load(function() {
    setTimeout(function(){
        jQuery('#preloader').fadeOut('1000');
        //jQuery('#preloader').removeClass('preloader-in');
    },1000);
});

/*//////////////--Javascript smoot scroll--///////////////////////*/

jQuery('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length && target || jQuery('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            var targetOffset = target.offset().top;
            jQuery('html,body').animate({scrollTop: targetOffset}, 800);
        return false;
        }
    }
});

/*//////////////--Javascript scroll position and percent position--////////////////////*/

var lastScrollTop = 0;

//capture scroll any percentage
jQuery(window).scroll(function(event){

    var wintop = jQuery(window).scrollTop();
    var docheight = jQuery(document).height();
    var winheight = jQuery(window).height();
    var pageHeight = (docheight-winheight);
    var scrolltrigger = 0.95;
    var scrollPercent = Math.round(((wintop/pageHeight)*100)*100)/100;

    //console.log('wintop='+wintop);
    //console.log('docheight='+docheight);
    //console.log('winheight='+winheight);
    //console.log(wintop+'=='+pageHeight);
    //console.log(wintop==pageHeight);
    //console.log('%scrolled='+(wintop/pageHeight)*100);
    //console.log(scrollPercent);


    /*//////--Sticky nav menu--//////*/
    if ( wintop > (parseInt(winheight) / 2) ) {
        jQuery('.hd-headerbar').addClass('stiky-nav');
    }
    if (wintop > parseInt(winheight)) {
        if (wintop > lastScrollTop) {
            jQuery('.hd-headerbar').removeClass('stiky-nav-active');
        } else {
            jQuery('.hd-headerbar').addClass('stiky-nav-active');
        }
    } else if (wintop < lastScrollTop) {
        jQuery('.hd-headerbar').removeClass('stiky-nav-active');
        if ( wintop < (parseInt(winheight) / 2) ) {
            jQuery('.hd-headerbar').removeClass('stiky-nav');
        }
    }

    if (wintop > parseInt(winheight)) {
        if (wintop > lastScrollTop) {
            jQuery('.hd-headerbar').removeClass('stiky-nav-active');
        } else {
            jQuery('.hd-headerbar').addClass('stiky-nav-active');
        }
    }

    jQuery('.scroll-percent-position-value').css('width', scrollPercent+'%');

    lastScrollTop = wintop;

});

/*//////////////--Javascript offcanvas menu--///////////////*/
jQuery('#menu-button').click(function() {

    if (jQuery('#menu-button').hasClass('close-button')) {
        jQuery('.offcanvas-menu-container').removeClass('active');
        jQuery('#menu-button').removeClass('close-button');
        jQuery('.hd-headerbar').removeClass('menu-active');

        jQuery('.uk-navbar-nav li.uk-parent').removeClass('openDropdownButtonActive');
        jQuery('.submenuOpen').removeClass('submenuOpen');
        jQuery('.tm-navbar .uk-parent .uk-dropdown').slideUp();
        jQuery('.tm-navbar .uk-parent').removeClass('subMenuActive');
        jQuery('body').removeClass('noscroll');
        jQuery('.right-menu-container #contact-button').fadeIn('fast', function() {});

    } else {
        jQuery('.offcanvas-menu-container').addClass('active');
        jQuery('#menu-button').addClass('close-button');
        jQuery('.hd-headerbar').addClass('menu-active');
        jQuery('body').addClass('noscroll');
        jQuery('.right-menu-container #contact-button').fadeOut('fast', function() {});
    }

});


jQuery('.hamburger').click(function() {
    jQuery('.offcanvas-menu-container').addClass('active');
    jQuery('html').toggleClass('no-scroll');
    jQuery('body').toggleClass('menu-open');   
        if (jQuery(window).width() < '414'){
            jQuery('#video-message').fadeToggle();
        };
    if (jQuery('.hamburger').hasClass('is-active')) {
        jQuery('.offcanvas-menu-container').removeClass('active');
    }
    jQuery('.right-menu-container #contact-button').fadeToggle('fast', 'linear');
});



jQuery('.offcanvas-menu-container .close-button').click(function() {

});


/*//////////////--Javascript blog homepage--///////////////////////*/
jQuery('.last-from-blog-open-button').click(function(){

    jQuery('.last_from_blog_wrap').delay(0).animate({ opacity: 0 }, 300);
    jQuery('.last-from-blog-open-button').delay(0).animate({ opacity: 0 }, 300);


    jQuery('.blog_article_container').fadeIn(300);
    jQuery('.scroll-to').fadeOut(300);
    jQuery('.blog_article_container').css('z-index', '9999');
    jQuery('#blog_article_1').delay(100).animate({ height: 390, opacity: 1 }, 300);
    jQuery('#blog_article_2').delay(150).animate({ height: 190, opacity: 1 }, 400);
    jQuery('#blog_article_3').delay(200).animate({ height: 190, opacity: 1 }, 500);
    jQuery('#blog_article_4').delay(250).animate({ height: 190, opacity: 1 }, 600);

});

jQuery('.last-from-blog-close-button').click(function(){

    jQuery('.last_from_blog_wrap').delay(300).animate({ opacity: 1 }, 600);
    jQuery('.last-from-blog-open-button').delay(300).animate({ opacity: 1 }, 600);

    jQuery('.blog_article_container').fadeOut(600);
    jQuery('.scroll-to').fadeIn(900);
    jQuery('.blog_article_container').css('z-index', '99');
    jQuery('#blog_article_1').delay(100).animate({ height: 120, opacity: 0 }, 300);
    jQuery('#blog_article_2').delay(150).animate({ height: 120, opacity: 0 }, 400);
    jQuery('#blog_article_3').delay(200).animate({ height: 120, opacity: 0 }, 500);
    jQuery('#blog_article_4').delay(250).animate({ height: 120, opacity: 0 }, 600);

});

jQuery('#contact-button').click(function() {
    jQuery('#form-contact').css('top', '0');
});

jQuery('.contact-link').click(function() {
    jQuery('#form-contact').css('top', '0');
});

jQuery('#contact-form-close').click(function() {
    jQuery('#form-contact').css('top', '-100vh');
});

jQuery('.btn-map-container').click(function() {
    if (jQuery('.btn-map-container').hasClass('map-active')) {
        jQuery('.contact-form-section').fadeIn(600);
        jQuery('.map-overlay').fadeIn(600);
        jQuery('.uk-img-preserve').animate({opacity: 0.5}, 600);
        jQuery('.btn-map-container').removeClass('map-active');
        jQuery('.btn-map-container span').html('Attiva la mappa')
        jQuery('.btn-map-container span').attr('data-hover', 'Attiva la mappa');
    } else {
        jQuery('.contact-form-section').fadeOut(600);
        jQuery('.map-overlay').fadeOut(600);
        jQuery('.uk-img-preserve').animate({opacity: 1}, 600);
        jQuery('.btn-map-container').addClass('map-active');
        jQuery('.btn-map-container span').html('Disattiva la mappa')
        jQuery('.btn-map-container span').attr('data-hover', 'Disattiva la mappa');
    }
});



/*//////////////--hsb Form Framework--///////////////////////*/

jQuery('.hsb-form').each(function() {

    var formId = '#'+jQuery(this).attr('id');
    var inputTotalNumber = parseInt(jQuery(formId + " .input-container").length);

    jQuery(formId + " .next-step i").hide();
    jQuery(formId + " .input-container").first().addClass("current");

    var currentInputId = jQuery(formId + " .input-container.current input");

    jQuery(currentInputId).live("keyup", function(e) {

        //Press Enter Key or Right Arrow
        if(e.which == 13) {
            jQuery(formId + " .next-step").trigger( "click" );
        }

        //console.log(jQuery(this).val());
        if (jQuery(this).val() != "") {
            jQuery(formId + " .next-step i").fadeIn(200);
        } else {
            jQuery(formId + " .next-step i").fadeOut(200);
        }
    });

    if (inputTotalNumber > 1) {
        jQuery(formId + " .hsb-current-step").html("1");
        jQuery(formId + " .hsb-total-step").html(inputTotalNumber);
    } else {
        jQuery(formId + " #hsb-step").remove();
    }

    var currentStep = jQuery(formId + " .hsb-current-step").text();
    var percentProgress = ((currentStep*100) / inputTotalNumber).toFixed(2);
    jQuery(formId + " .progress-bar-value").css("width", percentProgress+"%");

    //Privacy checkbox listener
    jQuery(formId + " #privacy-checkbox").change(function(){
        if (currentStep == inputTotalNumber) {
          if(jQuery(this).is(':checked')){
            jQuery(formId + " button.submit").css("display", "block");
          } else {
            jQuery(formId + " button.submit").css("display", "none");
          }
        }
    });


    jQuery(formId + " .next-step").click(function() {
        jQuery(formId + " .next-step i").hide();

        if (currentStep < inputTotalNumber) {
            var getIdFromCurrentStep = "#" + jQuery(formId + " .input-container.current").attr("id");

            jQuery(getIdFromCurrentStep).removeClass("current");
            //console.log(getIdFromCurrentStep);
            jQuery(getIdFromCurrentStep).next().addClass("current");

            jQuery(formId + " .current input").focus();

            currentStep++;
            jQuery(formId + " .hsb-current-step").html(currentStep);

            var percentProgress = ((currentStep*100) / inputTotalNumber).toFixed(2);
            jQuery(formId + " .progress-bar-value").css("width", percentProgress+"%");
        }

        if (currentStep == inputTotalNumber) {
            jQuery(formId + " .next-step").css("display", "none");

            if(jQuery(formId + " #privacy-checkbox").is(':checked')){
                jQuery(formId + " button.submit").css("display", "block");
            }
        }
    });


    jQuery(formId +" .prev-step").click(function() {
        jQuery(formId + " .next-step i").show();

            if (currentStep > 1) {

                var getIdFromCurrentStep = "#" + jQuery(formId + " .input-container.current").attr("id");

                jQuery(getIdFromCurrentStep).removeClass("current");
                //console.log(getIdFromCurrentStep);
                jQuery(getIdFromCurrentStep).prev().addClass("current");

                jQuery(formId + " .current input").focus();

                currentStep--;
                jQuery(formId + " .hsb-current-step").html(currentStep);

                var percentProgress = ((currentStep*100) / inputTotalNumber).toFixed(2);
                jQuery(formId + " .progress-bar-value").css("width", percentProgress+"%");

        }

        if (currentStep != inputTotalNumber) {
            jQuery(formId + " .next-step").css("display", "block");
            jQuery(formId + " button.submit").css("display", "none");
        }

    });

    var navigation = [];

    jQuery(formId + " .input-container > *").each(function() {
        navigation.push("<div class=\"step-name\">" + jQuery(this).attr("name") + "</div>");
    });

    jQuery(formId + " .step").html(navigation);
    jQuery(formId + " .step-name").css("width", percentProgress+"%");

    jQuery(formId + ".hsb-form").on('submit', function(event) {
        event.preventDefault();

        if (currentStep == inputTotalNumber) {

            jQuery(formId).css('opacity','0.6');

            jQuery.ajax({
                type: "POST",
                url: "./hsb-form/submit.php",
                data: jQuery(formId).serialize(),
                success: function(result) {

                    if (result.toLowerCase().indexOf("success") >= 0) {
                        jQuery(formId).css('transform','rotateX(90deg)');
                        jQuery(formId + '-message').html(result);
                        jQuery(formId + '-message').css('transform','rotateX(0deg)');
                    } else {
                        jQuery(formId + '-message').html(result);
                        jQuery(formId + '-message').css('transform','rotateX(0deg)');
                        jQuery(formId + '-message').delay(3000).fadeOut(1000);
                    }
                },
                error: function(result) {
                    console.log(result);
                    jQuery(formId + '-message').html('<div class="error"><li class="ion-close-circled"></li><p>' + result + '</p></div>');
                    jQuery(formId + '-message').css('transform','rotateX(0deg)');
                }
            });

            return false;
        } //else {
        //     return false;
        // }
    });
});


var wWidth = jQuery(window).width();

if (wWidth < '1025') {

    jQuery('input').focus(function() {
        jQuery('.btn-map-container').css('display', 'none');
    });

    jQuery('input').focusout(function() {
        jQuery('.btn-map-container').css('display', 'block');
    });

}


//Cookie BTN

jQuery('#euCookieAcceptWP').addClass('btn cta');

// Main Menu Modify

jQuery(document).ready(function() {

    var menuDropDownElement = '<div class="openDropdownButton"><i class="ion-ios-arrow-down"></i></div>';

    jQuery('.uk-navbar-nav li.uk-parent').each(function() {
        jQuery(menuDropDownElement).insertAfter(jQuery(this).children('a'));
    });

});

    jQuery('.tm-navbar > .uk-navbar-nav > li.uk-parent').click(function() {

        var winWidth = jQuery(window).width();

        if (winWidth > 737) {

            if(jQuery(this).hasClass('openDropdownButtonActive')) {

                jQuery(this).removeClass('openDropdownButtonActive');
                jQuery(this).removeClass('subMenuActive');
                jQuery('.tm-navbar').removeClass('submenuOpen');
                jQuery(this).find('.uk-dropdown').slideUp(300);
            } else {
                jQuery(this).addClass('openDropdownButtonActive');
                jQuery(this).addClass('subMenuActive');
                jQuery('.tm-navbar').addClass('submenuOpen');
                jQuery(this).find('.uk-dropdown').slideDown(300);
            }

        } else {

            if (jQuery(this).hasClass('first-click-ok')) {

                if(jQuery(this).hasClass('openDropdownButtonActive')) {

                    jQuery(this).removeClass('openDropdownButtonActive');
                    jQuery(this).removeClass('subMenuActive');
                    jQuery('.tm-navbar').removeClass('submenuOpen');
                    jQuery(this).find('.uk-dropdown').slideUp(300);
                } else {
                    jQuery(this).addClass('openDropdownButtonActive');
                    jQuery(this).addClass('subMenuActive');
                    jQuery('.tm-navbar').addClass('submenuOpen');
                    jQuery(this).find('.uk-dropdown').slideDown(300);
                }
            }

            jQuery(this).addClass('first-click-ok');
        }
    });