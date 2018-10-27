// const menuButton = document.querySelector('.js-burger');
// const menu = document.querySelector('.burger-list');

// function menuButtonClickHandler() {
//     menu.classList.toggle('hidden')
// };
// menuButton.addEventListener('click', menuButtonClickHandler);


// -------------------
let parkingMarkers=[];
 let cafeMarkers=[];
 let sightMarkers=[];
 let geotagMarkers=[];
 

function addMarker(location, arrayMarkers, icon) {
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          icon: icon,
        });
        arrayMarkers.push(marker);
      }
      
      var markersParking = [{lat: 50.35741736, lng:33.26821771},];

      var markersCafe = [
      {lat: 50.36136372, lng: 33.27227418},
      {lat: 50.35961153, lng: 33.27658718},
      ];
      
      var markersSight = [
      {lat:50.35958415,  lng:33.2721669},
      {lat:50.35731167,  lng:33.2637984},
      {lat:50.35999483,  lng:33.26744621},
      {lat:50.35095911,  lng:33.26538627},
      {lat:50.38446476,  lng:33.28152244},
      {lat:50.32647189,  lng:33.22792118},
      {lat:50.28744158,  lng:33.22174137},
      {lat:50.25068435,  lng:33.14037387},
      {lat:50.36218504,  lng:33.27109401},
      {lat:50.35810869,  lng:33.28208473},
      {lat:50.36211447,  lng:33.2846553},
      {lat:50.3529033,  lng:33.25626676}
      ];
  
function delateMarkers(array){
for (var i = 0; i < array.length; i++) {
  array[i].setMap(null);
}
}
     

let parkingHandle = false;
function Parking(controlDiv, map) {
        google.maps.event.addDomListener(parking, 'click', function() {
            if(!parkingHandle){
                const icon = {
                          scaledSize: new google.maps.Size(33, 33), // scaled size
                          url: "./img/bikeparking_on_map.svg"
                        };
                markersParking.map(parking => addMarker(parking, parkingMarkers, icon));
                parkingHandle = true;
            } else {
            delateMarkers(parkingMarkers);
            parkingHandle = false;
            }
  });
} 

let cafeHandle = false;
function Cafe(controlDiv, map) {
        google.maps.event.addDomListener(cafe, 'click', function() {
            if(!cafeHandle){
              const icon = {
                scaledSize: new google.maps.Size(33, 33), // scaled size
                url: "./img/cafe_on_map.svg"
              };
                markersCafe.map(cafe => addMarker(cafe, cafeMarkers, icon));
                cafeHandle = true;
            } else {
            delateMarkers(cafeMarkers);
            cafeHandle = false;
            }
  });
} 

let sightHandle = false;
function Sight(controlDiv, map) {
        google.maps.event.addDomListener(sight, 'click', function() {
            if(!sightHandle){
              const icon = {
                scaledSize: new google.maps.Size(33, 33), // scaled size 
                url: "./img/tourist_points_on_map.svg"
              };
                markersSight.map(sight => addMarker(sight, sightMarkers, icon));
                sightHandle = true;
            } else {
            delateMarkers(sightMarkers);
            sightHandle = false;
            }
  });
} 
function MapControl(controlDiv, map) {

 google.maps.event.addDomListener(zoomin , 'click', function() {
   var currentZoomLevel = map.getZoom();
   if(currentZoomLevel != 0){
     map.setZoom(currentZoomLevel - 1);}     
  });

   google.maps.event.addDomListener(zoomout, 'click', function() {
   var currentZoomLevel = map.getZoom();
   if(currentZoomLevel != 21){
     map.setZoom(currentZoomLevel + 1);}
  });

}


let geotagHandle = false;
function Geotag(controlDiv, map) {
        google.maps.event.addDomListener(geotag, 'click', function() {
            if(!geotagHandle){
                const icon = {
                          scaledSize: new google.maps.Size(30, 30), // scaled size
                          url: "../img/your location_on_map.svg"
                        };
                addMarker({ lat: 50.3574885, lng: 33.2762039 }, geotagMarkers, icon);
                geotagHandle = true;
            } else {
            delateMarkers(geotagMarkers);
            geotagHandle = false;
            }
  });
} 

      // markerPosition = new google.maps.Marker(
      //   {position: { lat: 50.3574885, lng: 33.2762039 }, 
      //     map: map,
      //     icon: 'https://pbs.twimg.com/profile_images/707025898222936064/hs3oOROZ_bigger.jpg',
      //   }); 


//-------------------------------------------------------------------------

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.3574885, lng: 33.2762039},
          zoom: 12,
          disableDefaultUI: true,
          styles: [
    {
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ],
        
        
        
        });
        
        
    

var mapControlDiv = document.createElement('div');
var mapControl = new MapControl(mapControlDiv, map);

      //---------------------------------------Объект данных---------------------------------------
      const routes = {
        accessRoutes: {
          color: '#336600',
          coords: [[{ lat: 50.3753984, lng: 33.3846617 },
          { lat: 50.3750152, lng: 33.3844042 },
          { lat: 50.374632, lng: 33.3838034 },
          { lat: 50.3742351, lng: 33.3832026 },
          { lat: 50.3733319, lng: 33.3813787 },
          { lat: 50.3714159, lng: 33.3807349 },
          { lat: 50.3693083, lng: 33.3804131 },
          { lat: 50.3683913, lng: 33.3800268 },
          { lat: 50.368227, lng: 33.3797693 },
          { lat: 50.3681449, lng: 33.3793402 },
          { lat: 50.3681586, lng: 33.3787179 },
          { lat: 50.3691988, lng: 33.3755636 },
          { lat: 50.3709096, lng: 33.3718085 },
          { lat: 50.3712517, lng: 33.3693624 },
          { lat: 50.3710601, lng: 33.3648562 },
          { lat: 50.371238, lng: 33.3603072 },
          { lat: 50.3712928, lng: 33.3539557 },
          { lat: 50.3712517, lng: 33.3477974 },
          { lat: 50.3710327, lng: 33.3351159 },
          { lat: 50.372155, lng: 33.3197308 },
          { lat: 50.3726476, lng: 33.3085299 },
          { lat: 50.3707316, lng: 33.3044958 },
          { lat: 50.3702116, lng: 33.3027792 },
          { lat: 50.3704579, lng: 33.3007193 },
          { lat: 50.3710054, lng: 33.2987452 },
          { lat: 50.3700747, lng: 33.2970285 },
          { lat: 50.3687608, lng: 33.2959127 },
          { lat: 50.3675837, lng: 33.2950544 },
          { lat: 50.3669268, lng: 33.2940245 },
          { lat: 50.365712, lng: 33.2901353 }],
          [{ lat: 50.3308884, lng: 33.2395649 },
          { lat: 50.3369972, lng: 33.2340288 },
          { lat: 50.3395445, lng: 33.2314968 },
          { lat: 50.3422561, lng: 33.234973 },
          { lat: 50.3437076, lng: 33.2369471 },
          { lat: 50.3451044, lng: 33.2393503 },
          { lat: 50.3466654, lng: 33.2421827 },
          { lat: 50.3481168, lng: 33.245573 },
          { lat: 50.3491849, lng: 33.248148 },
          { lat: 50.3503076, lng: 33.2508945 }]],
        },

        //----------------------------------------------------------
        recrRoutes: {
          color: '#88A80D',
          coords: [
            [
              { lat: 50.3658831, lng: 33.2717568 },
              { lat: 50.3667146, lng: 33.2699972 },
              { lat: 50.367091, lng: 33.2690263 },
              { lat: 50.3672997, lng: 33.2682002 },
              { lat: 50.3674879, lng: 33.2669771 },
              { lat: 50.3675119, lng: 33.2659632 },
              { lat: 50.3674298, lng: 33.2649493 },
              { lat: 50.3669473, lng: 33.2641929 },
              { lat: 50.3667351, lng: 33.2637048 },
              { lat: 50.3657086, lng: 33.2641554 },
              { lat: 50.3653185, lng: 33.26231 },
              { lat: 50.3652569, lng: 33.2609367 },
              { lat: 50.3642029, lng: 33.2611299 },
              { lat: 50.3637512, lng: 33.2610869 },
              { lat: 50.3635459, lng: 33.2607651 },
              { lat: 50.3633953, lng: 33.2603788 },
              { lat: 50.3633269, lng: 33.2589412 },
              { lat: 50.3632858, lng: 33.2583189 },
              { lat: 50.3629436, lng: 33.2579541 },
              { lat: 50.3624645, lng: 33.2578468 },
              { lat: 50.3612599, lng: 33.2582331 },
              { lat: 50.35985, lng: 33.2585549 },
              { lat: 50.3594803, lng: 33.2589412 },
              { lat: 50.358878, lng: 33.2598209 },
              { lat: 50.3584399, lng: 33.2605934 },
              { lat: 50.3585084, lng: 33.26231 },
              { lat: 50.3587411, lng: 33.2640696 },
              { lat: 50.3587685, lng: 33.2660007 },
              { lat: 50.3587137, lng: 33.2681036 },
              { lat: 50.3593708, lng: 33.2683396 },
              { lat: 50.3598773, lng: 33.2683182 },
              { lat: 50.3605207, lng: 33.2678461 },
              { lat: 50.3615474, lng: 33.2670307 },
              { lat: 50.3627657, lng: 33.2667732 },
              { lat: 50.3636691, lng: 33.2663012 },
              { lat: 50.3645588, lng: 33.265636 },
              { lat: 50.3657086, lng: 33.2641768 }
            ],
            [
              { lat: 50.3498421, lng: 33.2664943 },
              { lat: 50.350513, lng: 33.2661939 },
              { lat: 50.3509922, lng: 33.2655931 },
              { lat: 50.3523203, lng: 33.2649922 },
              { lat: 50.3532376, lng: 33.2645202 },
              { lat: 50.3537442, lng: 33.2639408 },
              { lat: 50.3536483, lng: 33.2629752 },
              { lat: 50.3530049, lng: 33.2623529 },
              { lat: 50.3523887, lng: 33.262825 },
              { lat: 50.351444, lng: 33.2637691 },
              { lat: 50.3509785, lng: 33.2649279 },
              { lat: 50.3507458, lng: 33.2659149 }
            ],
            [
              { lat: 50.3740675, lng: 33.2699972 },
              { lat: 50.37741, lng: 33.267417 },
              { lat: 50.3789152, lng: 33.2665157 },
              { lat: 50.3789973, lng: 33.2684469 },
              { lat: 50.3803657, lng: 33.2757425 },
              { lat: 50.379572, lng: 33.2764506 },
              { lat: 50.3793668, lng: 33.27703 },
              { lat: 50.3791889, lng: 33.278532 },
              { lat: 50.3797499, lng: 33.2800341 },
              { lat: 50.380133, lng: 33.2808924 },
              { lat: 50.3809404, lng: 33.2813644 },
              { lat: 50.3816656, lng: 33.2821798 },
              { lat: 50.3826507, lng: 33.2834029 },
              { lat: 50.3831707, lng: 33.2838535 },
              { lat: 50.3838274, lng: 33.2836819 },
              { lat: 50.3834033, lng: 33.2826304 },
              { lat: 50.3837179, lng: 33.2810211 },
              { lat: 50.3844294, lng: 33.2808065 },
              { lat: 50.3850588, lng: 33.2814503 },
              { lat: 50.3858387, lng: 33.282094 },
              { lat: 50.3863722, lng: 33.2815361 },
              { lat: 50.3863586, lng: 33.281064 },
              { lat: 50.3851683, lng: 33.2800126 },
              { lat: 50.3842789, lng: 33.2782531 },
              { lat: 50.3835127, lng: 33.2779312 },
              { lat: 50.3828423, lng: 33.2771158 },
              { lat: 50.3827602, lng: 33.2758498 },
              { lat: 50.3828012, lng: 33.2737255 },
              { lat: 50.3827602, lng: 33.2725239 },
              { lat: 50.3822402, lng: 33.2726741 },
              { lat: 50.3815287, lng: 33.2722878 },
              { lat: 50.3819118, lng: 33.2707214 },
              { lat: 50.3819118, lng: 33.2691979 },
              { lat: 50.3807762, lng: 33.2683611 },
              { lat: 50.3801467, lng: 33.2677174 },
              { lat: 50.3797773, lng: 33.2680392 },
              { lat: 50.379572, lng: 33.2672453 },
              { lat: 50.3792983, lng: 33.2672024 },
              { lat: 50.3789152, lng: 33.2665157 }
            ],
            [
              { lat: 50.3733319, lng: 33.3813787 },
              { lat: 50.3740572, lng: 33.3815289 },
              { lat: 50.3745499, lng: 33.3815718 },
              { lat: 50.3748373, lng: 33.3815932 },
              { lat: 50.3751931, lng: 33.3815718 },
              { lat: 50.3755215, lng: 33.3814216 },
              { lat: 50.3757542, lng: 33.381722 },
              { lat: 50.3760552, lng: 33.3826661 },
              { lat: 50.3763837, lng: 33.3830094 },
              { lat: 50.3767668, lng: 33.3829665 },
              { lat: 50.3773826, lng: 33.3826447 },
              { lat: 50.3781079, lng: 33.3823872 },
              { lat: 50.3787647, lng: 33.3821297 },
              { lat: 50.3791068, lng: 33.3816147 },
              { lat: 50.379531, lng: 33.3812284 },
              { lat: 50.3798594, lng: 33.3806705 },
              { lat: 50.3799825, lng: 33.3822799 },
              { lat: 50.3800783, lng: 33.3837819 },
              { lat: 50.380133, lng: 33.3853054 },
              { lat: 50.3802015, lng: 33.3868289 },
              { lat: 50.3804204, lng: 33.3878374 },
              { lat: 50.3823223, lng: 33.388052 },
              { lat: 50.3837179, lng: 33.3886528 },
              { lat: 50.3844157, lng: 33.3894253 },
              { lat: 50.3850588, lng: 33.3897686 },
              { lat: 50.3857976, lng: 33.3899617 },
              { lat: 50.3859892, lng: 33.3905625 },
              { lat: 50.3863449, lng: 33.3910131 },
              { lat: 50.3867964, lng: 33.3907127 },
              { lat: 50.3874804, lng: 33.3898759 },
              { lat: 50.3898746, lng: 33.3903694 },
              { lat: 50.394088, lng: 33.3911204 },
              { lat: 50.3953191, lng: 33.3914638 },
              { lat: 50.3961672, lng: 33.3912277 },
              { lat: 50.3950592, lng: 33.388803 },
              { lat: 50.3929389, lng: 33.3838248 },
              { lat: 50.3920498, lng: 33.3816791 },
              { lat: 50.3913931, lng: 33.3784175 },
              { lat: 50.3910101, lng: 33.3768511 },
              { lat: 50.3903261, lng: 33.37713 },
              { lat: 50.3899704, lng: 33.3773017 },
              { lat: 50.3896694, lng: 33.3771729 },
              { lat: 50.3893821, lng: 33.3768725 },
              { lat: 50.3881508, lng: 33.376894 },
              { lat: 50.387713, lng: 33.3768725 },
              { lat: 50.387371, lng: 33.3762717 },
              { lat: 50.3871247, lng: 33.3749843 },
              { lat: 50.3869606, lng: 33.3747697 },
              { lat: 50.3866185, lng: 33.3745551 },
              { lat: 50.3858523, lng: 33.3738041 },
              { lat: 50.3854966, lng: 33.3729029 },
              { lat: 50.3852093, lng: 33.3723664 },
              { lat: 50.3850451, lng: 33.3723021 },
              { lat: 50.3849357, lng: 33.372066 },
              { lat: 50.3847304, lng: 33.3718729 },
              { lat: 50.3842516, lng: 33.3712935 },
              { lat: 50.3841695, lng: 33.3704352 },
              { lat: 50.3844705, lng: 33.3699203 },
              { lat: 50.3848536, lng: 33.3678389 },
              { lat: 50.3848809, lng: 33.3667016 },
              { lat: 50.3856061, lng: 33.3660793 },
              { lat: 50.3863586, lng: 33.3655214 },
              { lat: 50.3871795, lng: 33.3652854 },
              { lat: 50.3873026, lng: 33.3646417 },
              { lat: 50.3860713, lng: 33.3618951 },
              { lat: 50.3863722, lng: 33.3613372 },
              { lat: 50.3866048, lng: 33.3600712 },
              { lat: 50.3868648, lng: 33.3583546 },
              { lat: 50.387029, lng: 33.3571959 },
              { lat: 50.387412, lng: 33.3564019 },
              { lat: 50.3872615, lng: 33.3547282 },
              { lat: 50.3871247, lng: 33.3527541 },
              { lat: 50.3870563, lng: 33.3520889 },
              { lat: 50.3876036, lng: 33.3521748 },
              { lat: 50.3876036, lng: 33.3509946 },
              { lat: 50.3868648, lng: 33.3508229 },
              { lat: 50.3863175, lng: 33.3502221 },
              { lat: 50.385223, lng: 33.3473253 },
              { lat: 50.3842652, lng: 33.3445358 },
              { lat: 50.3804341, lng: 33.3346224 },
              { lat: 50.3791752, lng: 33.3321977 },
              { lat: 50.379011, lng: 33.3311677 },
              { lat: 50.3789699, lng: 33.3274126 },
              { lat: 50.3786278, lng: 33.3242798 },
              { lat: 50.3790794, lng: 33.3212757 },
              { lat: 50.3795994, lng: 33.3190656 },
              { lat: 50.3800236, lng: 33.3175206 },
              { lat: 50.3802836, lng: 33.3175206 },
              { lat: 50.3805709, lng: 33.3182073 },
              { lat: 50.3809267, lng: 33.318336 },
              { lat: 50.3813235, lng: 33.3178639 },
              { lat: 50.381734, lng: 33.3169842 },
              { lat: 50.3818708, lng: 33.3149028 },
              { lat: 50.3813372, lng: 33.3126926 },
              { lat: 50.3810772, lng: 33.3113408 },
              { lat: 50.3811593, lng: 33.3106112 },
              { lat: 50.3809814, lng: 33.3094311 },
              { lat: 50.3809404, lng: 33.3084011 },
              { lat: 50.3812003, lng: 33.3063412 },
              { lat: 50.3813645, lng: 33.3045387 },
              { lat: 50.3815835, lng: 33.3041096 },
              { lat: 50.3809404, lng: 33.303144 },
              { lat: 50.3806941, lng: 33.3027363 },
              { lat: 50.3801604, lng: 33.3025646 },
              { lat: 50.3792436, lng: 33.3026719 },
              { lat: 50.3778752, lng: 33.3029938 },
              { lat: 50.3769584, lng: 33.3029938 },
              { lat: 50.3744678, lng: 33.3013201 },
              { lat: 50.3727161, lng: 33.3002687 },
              { lat: 50.3718128, lng: 33.2997322 },
              { lat: 50.3710054, lng: 33.2987452 }
            ],
            [
              { lat: 50.2547512, lng: 33.1373835 },
              { lat: 50.2535988, lng: 33.1381989 },
              { lat: 50.2519524, lng: 33.1391859 },
              { lat: 50.2492631, lng: 33.1415892 },
              { lat: 50.2473147, lng: 33.1436062 },
              { lat: 50.2463816, lng: 33.1461811 },
              { lat: 50.2447898, lng: 33.147769 },
              { lat: 50.2501412, lng: 33.1701279 },
              { lat: 50.2535439, lng: 33.1853199 },
              { lat: 50.2559311, lng: 33.1926155 },
              { lat: 50.2566445, lng: 33.1940746 },
              { lat: 50.2584279, lng: 33.1957483 },
              { lat: 50.2647654, lng: 33.21064 },
              { lat: 50.2864876, lng: 33.2154465 },
              { lat: 50.3018407, lng: 33.2185364 },
              { lat: 50.3176273, lng: 33.2216263 },
              { lat: 50.3359289, lng: 33.2286644 },
              { lat: 50.3387776, lng: 33.2295227 },
              { lat: 50.3395445, lng: 33.2314968 }]],
        },



        //-----------------------------------------------------------------------------------------------

        arterialRoutes: {
          color: '#CCFF00',
          coords: [[
            { lat: 50.3503076, lng: 33.2508945 },
            { lat: 50.3513756, lng: 33.2528901 },
            { lat: 50.3518822, lng: 33.2539845 },
            { lat: 50.35269, lng: 33.255229 },
            { lat: 50.3537579, lng: 33.2574177 },
            { lat: 50.3545382, lng: 33.2588124 },
            { lat: 50.3559073, lng: 33.2600355 },
            { lat: 50.3562632, lng: 33.2606792 },
            { lat: 50.3564275, lng: 33.2612157 },
            { lat: 50.3568382, lng: 33.2639623 },
            { lat: 50.3572079, lng: 33.2664299 },
            { lat: 50.3576733, lng: 33.2692838 },
            { lat: 50.3586179, lng: 33.2703137 },
            { lat: 50.359672, lng: 33.2715154 },
            { lat: 50.3598773, lng: 33.2720304 }
          ],
          [
            { lat: 50.365712, lng: 33.2901353 },
            { lat: 50.3653835, lng: 33.2893521 },
            { lat: 50.3648907, lng: 33.2886118 },
            { lat: 50.362841, lng: 33.2859671 },
            { lat: 50.3602949, lng: 33.2822227 },
            { lat: 50.3590697, lng: 33.2804096 },
            { lat: 50.358967, lng: 33.2802165 },
            { lat: 50.3589259, lng: 33.2798302 },
            { lat: 50.3590012, lng: 33.2772231 },
            { lat: 50.359056, lng: 33.2755709 },
            { lat: 50.359097, lng: 33.2750452 },
            { lat: 50.359802, lng: 33.2724488 },
            { lat: 50.3598773, lng: 33.2720304 }
          ],
          [
            { lat: 50.3696778, lng: 33.2623959 },
            { lat: 50.3694246, lng: 33.2629216 },
            { lat: 50.3689319, lng: 33.2643485 },
            { lat: 50.3684186, lng: 33.266623 },
            { lat: 50.3676659, lng: 33.2701206 },
            { lat: 50.3672826, lng: 33.2717407 },
            { lat: 50.3640592, lng: 33.271848 },
            { lat: 50.3621908, lng: 33.2719445 },
            { lat: 50.3604865, lng: 33.2719982 },
            { lat: 50.3601511, lng: 33.271966 },
            { lat: 50.3598773, lng: 33.2720304 }
          ],
          [
            { lat: 50.3747825, lng: 33.2546604 },
            { lat: 50.3731951, lng: 33.2579434 },
            { lat: 50.3721755, lng: 33.2600892 },
            { lat: 50.3716828, lng: 33.2608187 },
            { lat: 50.3713749, lng: 33.2612908 },
            { lat: 50.3707111, lng: 33.2619667 },
            { lat: 50.3696778, lng: 33.2623959 }
          ],
          [
            { lat: 50.3740675, lng: 33.2699972 },
            { lat: 50.3733045, lng: 33.270523 },
            { lat: 50.3724834, lng: 33.2710916 },
            { lat: 50.3719428, lng: 33.2714349 },
            { lat: 50.3716452, lng: 33.2715315 },
            { lat: 50.3713475, lng: 33.2715261 },
            { lat: 50.3693664, lng: 33.2716173 },
            { lat: 50.3679122, lng: 33.271687 },
            { lat: 50.3672826, lng: 33.2717407 }
          ],
          [
            { lat: 50.3577982, lng: 33.2883033 },
            { lat: 50.357788, lng: 33.2881531 },
            { lat: 50.358007, lng: 33.2872465 },
            { lat: 50.3581679, lng: 33.2866189 },
            { lat: 50.3584331, lng: 33.2855487 },
            { lat: 50.3585905, lng: 33.284744 },
            { lat: 50.3587137, lng: 33.2839286 },
            { lat: 50.3587822, lng: 33.2833064 },
            { lat: 50.3588506, lng: 33.2824695 },
            { lat: 50.3588985, lng: 33.2811821 },
            { lat: 50.3589259, lng: 33.2806778 },
            { lat: 50.3590491, lng: 33.2803237 }
          ],
          [
            { lat: 50.3491746, lng: 33.2856613 },
            { lat: 50.3499208, lng: 33.285082 },
            { lat: 50.3505541, lng: 33.2845294 },
            { lat: 50.3526694, lng: 33.2826519 },
            { lat: 50.3542439, lng: 33.2812464 },
            { lat: 50.3552844, lng: 33.2803237 },
            { lat: 50.3563933, lng: 33.279165 },
            { lat: 50.357557, lng: 33.2779527 },
            { lat: 50.3580635, lng: 33.2773519 },
            { lat: 50.3587, lng: 33.2767296 },
            { lat: 50.3588849, lng: 33.2765365 },
            { lat: 50.3590286, lng: 33.2765365 }
          ],
          [
            { lat: 50.3639702, lng: 33.271848 },
            { lat: 50.3638984, lng: 33.2736397 },
            { lat: 50.3638539, lng: 33.2757854 },
            { lat: 50.3638231, lng: 33.2780921 },
            { lat: 50.3638368, lng: 33.2798034 },
            { lat: 50.3638231, lng: 33.2816595 },
            { lat: 50.363806, lng: 33.2822174 },
            { lat: 50.363782, lng: 33.28255 },
            { lat: 50.3636691, lng: 33.2829469 },
            { lat: 50.3630942, lng: 33.2841271 },
            { lat: 50.3627246, lng: 33.2848191 },
            { lat: 50.3624337, lng: 33.2853287 }
          ],
          [
            { lat: 50.3590714, lng: 33.2708207 },
            { lat: 50.3592682, lng: 33.2703781 },
            { lat: 50.3594701, lng: 33.2699221 },
            { lat: 50.3596104, lng: 33.2690129 },
            { lat: 50.35966, lng: 33.2685649 },
            { lat: 50.3597268, lng: 33.2681036 },
            { lat: 50.3598038, lng: 33.2675484 },
            { lat: 50.3598773, lng: 33.26702 },
            { lat: 50.35998, lng: 33.2662797 },
            { lat: 50.3600775, lng: 33.2656011 },
            { lat: 50.3601237, lng: 33.2653248 },
            { lat: 50.3599663, lng: 33.2594454 },
            { lat: 50.3594735, lng: 33.2586837 },
            { lat: 50.3594187, lng: 33.2584155 },
            { lat: 50.3590012, lng: 33.2581902 },
            { lat: 50.3590012, lng: 33.2574499 },
            { lat: 50.3589533, lng: 33.2569242 }
          ],
          [
            { lat: 50.3601289, lng: 33.2653061 },
            { lat: 50.3608475, lng: 33.2650056 },
            { lat: 50.3615885, lng: 33.2644773 },
            { lat: 50.3622181, lng: 33.2642627 },
            { lat: 50.3631353, lng: 33.2642412 },
            { lat: 50.3632448, lng: 33.2640266 },
            { lat: 50.3631969, lng: 33.2633185 },
            { lat: 50.3638607, lng: 33.2629323 },
            { lat: 50.3640968, lng: 33.262428 },
            { lat: 50.3643809, lng: 33.2622349 },
            { lat: 50.3645041, lng: 33.2621062 },
            { lat: 50.3653185, lng: 33.26231 },
            { lat: 50.3655306, lng: 33.2623315 },
            { lat: 50.365801, lng: 33.2622457 },
            { lat: 50.3662253, lng: 33.2620525 },
            { lat: 50.3665298, lng: 33.2618809 },
            { lat: 50.3670328, lng: 33.2613605 },
            { lat: 50.3678985, lng: 33.2605076 },
            { lat: 50.3684597, lng: 33.2599175 },
            { lat: 50.3689045, lng: 33.2605076 },
            { lat: 50.369363, lng: 33.2608616 },
            { lat: 50.3696744, lng: 33.2609797 }
          ],
          [
            { lat: 50.3696778, lng: 33.2623959 },
            { lat: 50.369712, lng: 33.2618433 },
            { lat: 50.3696778, lng: 33.2610977 },
            { lat: 50.3696299, lng: 33.2605398 },
            { lat: 50.3696675, lng: 33.2600141 },
            { lat: 50.3699378, lng: 33.2584852 },
            { lat: 50.3703895, lng: 33.2561731 },
            { lat: 50.3705845, lng: 33.2550091 },
            { lat: 50.3706016, lng: 33.2547516 },
            { lat: 50.3705742, lng: 33.2538986 },
            { lat: 50.3705571, lng: 33.2529813 },
            { lat: 50.3705161, lng: 33.2521766 }
          ],
          [
            { lat: 50.3491232, lng: 33.275308 },
            { lat: 50.3492978, lng: 33.2753563 },
            { lat: 50.3499448, lng: 33.2757962 },
            { lat: 50.3504514, lng: 33.2761931 },
            { lat: 50.3513482, lng: 33.276912 },
            { lat: 50.3518171, lng: 33.2772446 },
            { lat: 50.3523374, lng: 33.2775772 },
            { lat: 50.3525667, lng: 33.2776791 },
            { lat: 50.3529467, lng: 33.2777864 },
            { lat: 50.3533163, lng: 33.2778507 },
            { lat: 50.3534464, lng: 33.2778186 },
            { lat: 50.354042, lng: 33.2775182 },
            { lat: 50.3543192, lng: 33.2774001 },
            { lat: 50.3546888, lng: 33.2772392 },
            { lat: 50.355079, lng: 33.27703 },
            { lat: 50.3555308, lng: 33.2766974 },
            { lat: 50.3558217, lng: 33.2765472 },
            { lat: 50.3560613, lng: 33.2764667 },
            { lat: 50.3565918, lng: 33.2764077 },
            { lat: 50.3572832, lng: 33.2762897 },
            { lat: 50.3574885, lng: 33.2762039 },
            { lat: 50.3577897, lng: 33.2759517 },
            { lat: 50.3582859, lng: 33.2754958 },
            { lat: 50.35857, lng: 33.2753241 },
            { lat: 50.3589088, lng: 33.275249 },
            { lat: 50.3590868, lng: 33.2752168 }
          ],
          [
            { lat: 50.3552912, lng: 33.2416034 },
            { lat: 50.3544493, lng: 33.2431912 },
            { lat: 50.3521697, lng: 33.2474291 },
            { lat: 50.3508895, lng: 33.2498109 },
            { lat: 50.3503076, lng: 33.2508945 }
          ],
          [
            { lat: 50.3703912, lng: 33.2561584 },
            { lat: 50.3701038, lng: 33.2559666 },
            { lat: 50.3697257, lng: 33.255524 },
            { lat: 50.3696265, lng: 33.2554328 },
            { lat: 50.3695307, lng: 33.255406 },
            { lat: 50.3690824, lng: 33.2554382 },
            { lat: 50.3680217, lng: 33.2557064 },
            { lat: 50.3675564, lng: 33.2557762 },
            { lat: 50.3673134, lng: 33.255744 },
            { lat: 50.3670534, lng: 33.2555348 },
            { lat: 50.3667728, lng: 33.2550949 },
            { lat: 50.3666017, lng: 33.2546818 },
            { lat: 50.3663895, lng: 33.2542419 },
            { lat: 50.3662698, lng: 33.2541561 },
            { lat: 50.365931, lng: 33.2540488 },
            { lat: 50.3655443, lng: 33.2539308 },
            { lat: 50.3653664, lng: 33.2538128 },
            { lat: 50.3652569, lng: 33.253566 },
            { lat: 50.3651166, lng: 33.2537323 },
            { lat: 50.3648531, lng: 33.2539576 },
            { lat: 50.364593, lng: 33.2541722 },
            { lat: 50.3642748, lng: 33.2543117 },
            { lat: 50.3639771, lng: 33.2544512 },
            { lat: 50.3636417, lng: 33.2546067 },
            { lat: 50.363409, lng: 33.2547516 },
            { lat: 50.3631832, lng: 33.2549393 },
            { lat: 50.3628478, lng: 33.2550627 },
            { lat: 50.3625911, lng: 33.2550359 },
            { lat: 50.3623824, lng: 33.2549876 },
            { lat: 50.3621018, lng: 33.25495 },
            { lat: 50.3618759, lng: 33.2549661 },
            { lat: 50.3615713, lng: 33.2550305 },
            { lat: 50.3612189, lng: 33.2552075 },
            { lat: 50.3609656, lng: 33.2554436 },
            { lat: 50.3607226, lng: 33.2557064 },
            { lat: 50.3603154, lng: 33.2561624 },
            { lat: 50.3599766, lng: 33.2565004 },
            { lat: 50.3596754, lng: 33.2567203 },
            { lat: 50.3593674, lng: 33.2568222 },
            { lat: 50.3590765, lng: 33.2569027 },
            { lat: 50.3585015, lng: 33.2571173 },
            { lat: 50.3577281, lng: 33.2574391 },
            { lat: 50.3573893, lng: 33.2575893 },
            { lat: 50.3572181, lng: 33.257702 },
            { lat: 50.3570196, lng: 33.2578951 },
            { lat: 50.3566979, lng: 33.2583725 },
            { lat: 50.3563659, lng: 33.2589251 },
            { lat: 50.3557635, lng: 33.2598907 }
          ],
          [
            { lat: 50.3595351, lng: 33.2424295 },
            { lat: 50.3590902, lng: 33.2443178 },
            { lat: 50.3589054, lng: 33.2452512 },
            { lat: 50.3588438, lng: 33.2457662 },
            { lat: 50.3585632, lng: 33.2473218 },
            { lat: 50.3583304, lng: 33.2488346 },
            { lat: 50.3588849, lng: 33.2500362 },
            { lat: 50.3583852, lng: 33.2508624 },
            { lat: 50.3582688, lng: 33.2511199 },
            { lat: 50.3580909, lng: 33.2516241 },
            { lat: 50.3578924, lng: 33.2522142 },
            { lat: 50.3576733, lng: 33.2527077 },
            { lat: 50.3573927, lng: 33.2532656 },
            { lat: 50.3569614, lng: 33.2538664 },
            { lat: 50.3564275, lng: 33.2542849 },
            { lat: 50.3559552, lng: 33.2548213 },
            { lat: 50.3554418, lng: 33.2555401 },
            { lat: 50.3551269, lng: 33.2560873 },
            { lat: 50.3549969, lng: 33.2566345 },
            { lat: 50.3549558, lng: 33.2571709 },
            { lat: 50.3549969, lng: 33.2574177 },
            { lat: 50.355168, lng: 33.2580078 },
            { lat: 50.3554555, lng: 33.2590485 },
            { lat: 50.3555856, lng: 33.2593703 },
            { lat: 50.3556061, lng: 33.2597458 }]],
        }
      }


//----------------------Добавление полилиний в самом начале----------------------------
      const polylines = []

      for (let key in routes) {
        routes[key].coords.forEach((item, idx) => {
          const poly = new google.maps.Polyline({
            path: item,
            strokeColor: routes[key].color,
            strokeOpacity: 0.7,
            strokeWeight: 3,
            map: map
          });
          const obj = {type: key, index: idx, poly};
          polylines.push(obj);
        })
      }
      let polylinesHidden = false;
//---------------------Убрать все полилинии кроме одной--------------------

function removeAllButOnePolyline(type, idx) {
  polylines.forEach(item => {
    if(!((item.type === type) && (item.index === idx)) ) {
      item.poly.setMap(null);
    }
  })
}

//----------------------Восстановить отображение всех линий----------------------

function showAllPolylines() {
  polylines.forEach(item => {
      item.poly.setMap(map);
    })
}
//---------------------Функция для тестирования------------------------------------
      // document.getElementById('hide').addEventListener('click', () => {
      //   if (polylinesHidden) {
      //     showAllPolylines();
      //     polylinesHidden = false;
      //   } else {
      //     removeAllButOnePolyline('arterialRoutes', 2);
      //     polylinesHidden = true;
      //   }

      // })


//------------------------------------CURRENT GEOLOCATION START---------------------------------------------
        //   let markerPosition = null;
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //       markerPosition = new google.maps.Marker(
        //       {position: {lat: position.coords.latitude, lng: position.coords.longitude}, 
        //         map: map,
        //         // icon: 'https://pbs.twimg.com/profile_images/707025898222936064/hs3oOROZ_bigger.jpg',
        //       }); 

        //     });

        //   const watchID = navigator.geolocation.watchPosition(function(position) {
        //       markerPosition.setPosition({lat: position.coords.latitude, lng: position.coords.longitude});

        //     });
  //------------------------------------CURRENT GEOLOCATION END---------------------------------------------          
   
var parkingDiv = document.createElement('div');
var parking = new Parking(parkingDiv, map);

var cafeDiv = document.createElement('div');
var cafe = new Cafe(cafeDiv, map);

var sightDiv = document.createElement('div');
var sight = new Sight(sightDiv, map);

var geotagDiv = document.createElement('div');
var geotag = new Geotag(geotagDiv, map);
   
  
   
};