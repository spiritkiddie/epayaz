/*
* Build Date: Nov. 2017
* Author: Rashid
* Copyright (C) 2017 RASHID.IT
* This is a official product of rashid.it (fishlabs designs @ facebook)
*/


/* ------------------------------------- */
/* 1. Opening effect ................... */
/* ------------------------------------- */

// When all the files were been loaded
    $(window).load(function() {

        //init();
    
    });
    
    /////////////////////////////////////////////////////
    
    $(document).ready(function($) {
    
        /* ------------------------------------- */
        /* 3. Interaction  user forms ......... */
        /* ------------------------------------- */
    

        // Example starter JavaScript for disabling form submissions if there are invalid fields
  
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('validate-me');
  
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });

    
    /////////////////////////////////////////////////////
    
        /* ------------------------------------- */
        /* 5. scroll pluggin .................. */
        /* ------------------------------------- */
    
        /* custom settings */

       // Used to have a smooth scroll when the user is clicking on a link with a anchor
        smoothScroll.init({
            speed: 700, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        });
            

    
        // /* auto-open #firstlink on page load */
        // $("#firstlink").venobox().trigger('click');

        // /* custom settings for vegas */
        // $('.vegas').vegas({
        //     delay: 9000,
        //     timer: false,
        //     shuffle: true,
        //     transition: ['flash2','zoomOut2'],
        //     transitionDuration: 1000,
        //     overlay: './vendor/vegas/overlays/05.png',
        //     slides: [
        //         { src: './images/slides/slide1.jpg' },
        //         { src: './images/slides/slide2.jpg' },
        //         { src: './images/slides/slide3.jpg' },
        //         { src: './images/slides/slide4.jpg' },
        //         { src: './images/slides/slide5.jpg' }
        //     ]
        // })
    
    });

    /* custom settings for typed */
    let typed = new Typed("#typed", {
        //strings: ['Give Help...','Get Help...','Invest & Prosper','Let Your Money Work For You'],
        strings: ['<strong>Epayaz</strong> > <i>Give Help...</i>', '<strong>Epayaz</strong> > Get Help...', '<strong>Epayaz</strong> > Invest & Prosper;','<strong>Epayaz</strong> > Let Your Money Work For Your;'],
        typeSpeed: 40,
        backSpeed: 30,
        smartBackspace: true, // this is a default
        loop: true,
        showCursor: true
    });
    
    /* ------------------------------------- */
    /* 6. Map, Structure & Design .......... */
    /* ------------------------------------- */
    
    // When the window has finished loading create our google map below
    window.onresize = function () { init() };
    
    function init() {
    
        // Basic options for a simple Google Map
        // The latitude and longitude to center the map (always required)
        var center = new google.maps.LatLng(40.70820, -74.00487);
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            draggable: true,
            center: center,
    
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": 33
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2e5d4"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c5dac6"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c5c6c6"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e4d7c6"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fbfaf7"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#acbcc9"
                }]
            }]
        };
    
        let map = new google.maps.Map(document.getElementById('map'), mapOptions, center);
    
        let infowindow = new google.maps.InfoWindow();
    
        let marker = new google.maps.Marker({
            map: map,
            position: center,
            title: 'Locate us here!'
        });
    }