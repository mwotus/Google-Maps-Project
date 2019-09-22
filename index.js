//All the information about Hillary's travels was gathered from http://www.p2016.org/clinton/clintoncal1016.html//

$(document).ready(function() {
    
    var USCenter = {lat: 37.85, lng: -98.583333};
    
    var map = new google.maps.Map(document.getElementById('map'), {
        center: USCenter,
        zoom: 4.52,
        disableDefaultUI: true,
        mapTypeControl: false,
        zoomControl: true,
        scaleControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        gestureHandling: 'greedy',
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        styles: [
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
        
      });
    
 
    
   var Toledo = {lat: 41.655298, lng: -83.535717};
    var ToledoIcon = "2"

    
    var markerToledo = new google.maps.Marker({
    position: Toledo,
    map: map,
    title:'Toledo, Ohio',
        label: ToledoIcon,
       
    });
    
    
    var contentStringToledo = "<h1>October 3, 2016 - Toledo, Ohio</h1> <p> Clinton spoke about the economy at the Dr. Martin Luther King Jr. Plaza <br> Distance from Previous City: 467.62 miles <br> Total Distance Traveled To Date: 467.62 miles"
    
    var infowindowToledo = new google.maps.InfoWindow({
    content: contentStringToledo
  });
    
    markerToledo.addListener('click', function() {
        infowindowAkron.close();
    infowindowToledo.open(map, markerToledo);
  });
   
    

    
     var PolylineOneCoordinates = [
    {lat: 35.2266082, lng: -80.8528673},
    {lat: 41.655298, lng: -83.535717},
     ];
    
    var PolylineOne = new google.maps.Polyline({
    path: PolylineOneCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    PolylineOne.setMap(map);


       var Akron = {lat: 41.084821, lng: -81.515607};
    var AkronIcon = "3"
    
    var markerAkron = new google.maps.Marker({
    position: Akron,
    map: map,
    title:'Akron, Ohio',
        label: AkronIcon
});
    
    var contentStringAkron = "<h1>October 3, 2016 - Akron, Ohio</h1> <p> Clinton attended a voter registration event hosted by the Ohio Democratic Party at the Goodyear Hall and Theater <br> Distance from City: 111.91 miles <br> Total Distance Traveled To Date: 579.53 miles "
    
    var infowindowAkron = new google.maps.InfoWindow({
    content: contentStringAkron
  });
    
    markerAkron.addListener('click', function() {
        infowindowToledo.close();
        infowindowHaverford.close();
    infowindowAkron.open(map, markerAkron);
  });

    
   
   
 
    
        var PolylineTwoCoordinates = [
    {lat: 41.655298, lng: -83.535717},
    {lat: 41.084821, lng: -81.515607},
     ];
    
    var PolylineTwo = new google.maps.Polyline({
    path: PolylineTwoCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    
    
    PolylineTwo.setMap(map);
    
        var Haverford = {lat: 40.007272, lng: -75.317628};
    var HaverfordIcon = "4"
    
    var markerHaverford = new google.maps.Marker({
    position: Haverford,
    map: map,
    title:'Haverford, Pennslyvania',
        label: HaverfordIcon
});
    
    
    var contentStringHaverford = "<h1>October 4, 2016 - Haverford, Pennsylvania</h1> <p> Clinton was joined by Chelsea and actress Elizabeth Banks for a conversation with families at the Haverford Community Recreation & Environmental Center <br> Distance from Previous City: 333.74 miles <br> Total Distance Traveled To Date: 913.27 miles"
    
    var infowindowHaverford = new google.maps.InfoWindow({
    content: contentStringHaverford
  });
    
    markerHaverford.addListener('click', function() {
        infowindowAkron.close();
        infowindowHarrisburg.close();
    infowindowHaverford.open(map, markerHaverford);
  });

   
    
       var PolylineThreeCoordinates = [
    {lat: 41.084821, lng: -81.515607},
    {lat: 40.007272, lng: -75.317628},
     ];
    
    var PolylineThree = new google.maps.Polyline({
    path: PolylineThreeCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    PolylineThree.setMap(map);
    

    var Harrisburg = {lat: 40.259572, lng: -76.881821		};
    var HarrisburgIcon = "5"
    
    var markerHarrisburg = new google.maps.Marker({
    position: Harrisburg,
    map: map,
    title:'Harrisburg, Pennslyvania',
        label: HarrisburgIcon
});
    
      var contentStringHarrisburg = "<h1>October 4, 2016 - Harrisburg, Pennsylvania</h1> <p> Clinton attended an organizing and voter registration event at the Zembo Shrine <br> Distance from Previous City: 84.45 miles <br> Total Distance Traveled To Date: 997.72 miles"
    
    var infowindowHarrisburg = new google.maps.InfoWindow({
    content: contentStringHarrisburg
  });
    
    markerHarrisburg.addListener('click', function() {
        infowindowHaverford.close();
         infowindowMcLean.close();
    infowindowHarrisburg.open(map, markerHarrisburg);
  });
    
       
        var PolylineFourCoordinates = [
    {lat: 40.007272, lng: -75.317628},
    {lat: 40.259572, lng: -76.881821},
     ];
    
    var PolylineFour = new google.maps.Polyline({
    path: PolylineFourCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    PolylineFour.setMap(map);
    
    
    var McLean = {lat: 38.937593, lng: -77.183779};
    var McLeanIcon = "6"
    
    var markerMcLean = new google.maps.Marker({
    position: McLean,
    map: map,
    title:'McLean, Virginia',
        label: McLeanIcon
    
    });
    
        var contentStringMcLean = "<h1>October 4, 2016 - McLean, Virginia</h1> <p> Clinton attended a fundraiser at a private home <br> Distance from Previous City: 92.74 miles <br> Total Distance Traveled To Date: 1,090.46 miles"
    
    var infowindowMcLean = new google.maps.InfoWindow({
    content: contentStringMcLean
  });
    
    markerMcLean.addListener('click', function() {
        infowindowHarrisburg.close();
        infowindowDC.close();
    infowindowMcLean.open(map, markerMcLean);
  });
    
 
        var PolylineFiveCoordinates = [
    {lat: 40.259572, lng: -76.881821},
    {lat: 38.937593, lng: -77.183779},
     ];
    
    var PolylineFive = new google.maps.Polyline({
    path: PolylineFiveCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    PolylineFive.setMap(map);
    
      var WashingtonDC = {lat: 38.892062, lng: -77.019912};
    var WashingtonDCIcon = "7"
    
    var markerDC = new google.maps.Marker({
    position: WashingtonDC,
    map: map,
    title:'Washington D.C.',
        label: WashingtonDCIcon
    
    });
    
      var contentStringDC = "<h1>October 5, 2016 - Washington, D.C.</h1> <p> Clinton attended a debate preparation session at her D.C. home and a celebration hosted by the Women's Leadersip Forum and Women for Hillary <br> Distance from Previous City: 9.35 miles <br> Total Distance Traveled To Date: 1,099.81 miles"
    
    var infowindowDC = new google.maps.InfoWindow({
    content: contentStringDC
  });
    
    markerDC.addListener('click', function() {
        infowindowMcLean.close();
    infowindowDC.open(map, markerDC);
  });
    
    

    
    
        var PolylineSixCoordinates = [
    {lat: 38.937593, lng: -77.183779},
    {lat: 38.892062, lng: -77.019912},
     ];
    
    var PolylineSix = new google.maps.Polyline({
    path: PolylineSixCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineSix.setMap(map);
    


   


        var PolylineSevenCoordinates = [
    {lat: 38.892062, lng: -77.019912},
    {lat: 40.713054, lng: -74.007228},
     ];
    
    var PolylineSeven = new google.maps.Polyline({
    path: PolylineSevenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineSeven.setMap(map);
    

    
     var StLouis = {lat: 38.630276, lng: -90.200309};
    var StLouisIcon = "9"
    
    var markerST = new google.maps.Marker({
    position: StLouis,
    map: map,
    title:'St. Louis, Missouri',
        label: StLouisIcon
    
    });
    
        var contentStringST = "<h1>October 9, 2016 - St. Louis, Missouri</h1> <p> Clinton participated in the second presidential debate at Washington University in St. Louis <br> Distance from Previous City: 871.82 miles <br> Total Distance Traveled To Date: 2,175.09 miles"
    
    var infowindowST = new google.maps.InfoWindow({
    content: contentStringST
  });
    
    markerST.addListener('click', function() {
    infowindowST.open(map, markerST);
  });
    
        
    
    
    
    
      var PolylineEightCoordinates = [
    {lat: 40.713054, lng: -74.007228},
    {lat: 38.630276, lng: -90.200309},
     ];
    
    var PolylineEight = new google.maps.Polyline({
    path: PolylineEightCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineEight.setMap(map);
    
    
     

    
        var PolylineNineCoordinates = [
    {lat: 38.630276, lng: -90.200309},
    {lat: 42.332916, lng: -83.047853},
     ];
    
    var PolylineNine = new google.maps.Polyline({
    path: PolylineNineCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineNine.setMap(map);
    
      var Columbus = {lat: 39.962649, lng: -82.996216};
    var ColumbusIcon = "11"
    
    var markerColumbus = new google.maps.Marker({
    position: Columbus,
    map: map,
    title:'Columbus, Ohio',
        label: ColumbusIcon
    
    });
    
     var contentStringColumbus = "<h1>October 10, 2016 - Columbus, Ohio</h1> <p> Clinton attended a voter registration event at the South Oval on the campus of Ohio State University <br> Distance from Previous City: 163.79 miles <br> Total Distance Traveled To Date: 2,793.31 miles"
    
    var infowindowColumbus = new google.maps.InfoWindow({
    content: contentStringColumbus
  });
    
    markerColumbus.addListener('click', function() {
    infowindowColumbus.open(map, markerColumbus);
  });
    
    
    
          var PolylineTenCoordinates = [
    {lat: 42.332916, lng: -83.047853},
    {lat: 39.962649, lng: -82.996216},
     ];
    
    var PolylineTen = new google.maps.Polyline({
    path: PolylineTenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTen.setMap(map);
    
      
    
            var PolylineElevenCoordinates = [
    {lat: 39.962649, lng: -82.996216},
    {lat: 25.775084, lng: -80.194702},
     ];
    
    var PolylineEleven = new google.maps.Polyline({
    path: PolylineElevenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    
    PolylineEleven.setMap(map);
    
    
         var Pueblo = {lat: 38.265425, lng: -104.610415};
    var PuebloIcon = "13"
    
    var markerPueblo = new google.maps.Marker({
    position: Pueblo,
    map: map,
    title:'Pueblo, Colorado',
        label: PuebloIcon
    
    });
    
     var contentStringPueblo = "<h1>October 12, 2016 - Pueblo, Colorado</h1> <p> Clinton attended a voter registration event at the Colorado State Fair and Rodeo's Palace of Agriculture <br> Distance from Previous City: 1,662.54 miles <br> Total Distance Traveled To Date: 5,449.36 miles"

    
    var infowindowPueblo = new google.maps.InfoWindow({
    content: contentStringPueblo
  });
    
    markerPueblo.addListener('click', function() {
    infowindowPueblo.open(map, markerPueblo);
  });
    
      
    
               var PolylineTwelveCoordinates = [
    {lat: 25.775084, lng: -80.194702},
    {lat: 38.265425, lng: -104.610415},
     ];
    
    var PolylineTwelve = new google.maps.Polyline({
    path: PolylineTwelveCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    
     PolylineTwelve.setMap(map);
    

    
            var PolylineThirteenCoordinates = [
    {lat: 38.265425, lng: -104.610415},
    {lat: 36.169202, lng: -115.140597},
     ];
    
    var PolylineThirteen = new google.maps.Polyline({
    path: PolylineThirteenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    
     PolylineThirteen.setMap(map);
    
    
    var SanFrancisco = {lat: 37.78008, lng: -122.420168};
    var SanFranciscoIcon = "15"
    
    var markerSF = new google.maps.Marker({
    position: SanFrancisco,
    map: map,
    title:'San Francisco, California',
        label: SanFranciscoIcon
    
    });
    
         var contentStringSF = "<h1>October 13, 2016 - San Francisco, California</h1> <p> Clinton spoke to volunteers at a field office and attended a fundraiser hosted by California Celebrates Hillary <br> Distance from Previous City: 416.83 miles <br> Total Distance Traveled To Date: 6,463.04 miles"

    
    var infowindowSF = new google.maps.InfoWindow({
    content: contentStringSF
  });
    
    markerSF.addListener('click', function() {
        infowindowLA.close();
    infowindowSF.open(map, markerSF);
  });
    

   
    
    
     var PolylineFourteenCoordinates = [
    {lat: 36.169202, lng: -115.140597},
    {lat: 37.78008, lng: -122.420168},
     ];
    
    var PolylineFourteen = new google.maps.Polyline({
    path: PolylineFourteenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
    
     PolylineFourteen.setMap(map);
    
    
    var LosAngeles = {lat: 34.052238, lng: -118.243344};
    var LosAngelesIcon = "16"
    
    var markerLA = new google.maps.Marker({
    position: LosAngeles,
    map: map,
    title:'Los Angeles, California',
        label: LosAngelesIcon
    
    });
    
     var contentStringLA = "<h1>October 13, 2016 - Los Angeles, California</h1> <p> Clinton attended a fundraising dinner at Casey and Laura Wasserman's home <br> Distance from Previous City: 347.72 miles <br> Total Distance Traveled To Date: 6,810.76 miles"

    
    var infowindowLA = new google.maps.InfoWindow({
    content: contentStringLA
  });
    
    markerLA.addListener('click', function() {
        infowindowSF.close();
        infowindowSeattle.close();
    infowindowLA.open(map, markerLA);
  });
   
     
    
     var PolylineFifteenCoordinates = [
    {lat: 37.7800, lng: -122.420168},
    {lat: 34.052238, lng: -118.243344},
     ];
    
    var PolylineFifteen = new google.maps.Polyline({
    path: PolylineFifteenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFifteen.setMap(map);
    
     var Seattle = {lat: 47.603229, lng: -122.33028};
    var SeattleIcon = "17"
    
    var markerSeattle = new google.maps.Marker({
    position: Seattle,
    map: map,
    title:'Seattle, Washington',
        label: SeattleIcon
    
    });
    
     var contentStringSeattle = "<h1>October 14, 2016 - Seattle, Washington</h1> <p> Clinton was joined by Macklemore and Ryan Lewis at a fundraiser at Paramount Theater and spoke to volunteers at a field office <br> Distance from Previous City: 959.99 miles <br> Total Distance Traveled To Date: 7,770.75 miles"

    
    var infowindowSeattle = new google.maps.InfoWindow({
    content: contentStringSeattle
  });
    
    markerSeattle.addListener('click', function() {
        infowindowLA.close();
    infowindowSeattle.open(map, markerSeattle);
  });
    
    
    
     var PolylineSixteenCoordinates = [
    {lat: 34.052238, lng: -118.243344},
    {lat: 47.603229, lng: -122.33028},
     ];
    
    var PolylineSixteen = new google.maps.Polyline({
    path: PolylineSixteenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineSixteen.setMap(map);
    
       var locationsVegas = [{
  lat: 36.169202,
  lng: -115.140597,
  info: "<h1>October 12, 2016 - Las Vegas, Nevada</h1> <p> Clinton surprised customers by greeting them at Tacos El Gordo on E. Charleston Boulevard and attended a rally for the Performing Arts at the Smith Center <br> Distance from Previous City: 596.85 miles <br> Total Distance Traveled To Date: 6,046.21 miles",
  label: '14',
title: 'Las Vegas, Nevada'
}, {
  lat: 36.16935,
  lng: -115.1407,
  info: "<h1>October 19, 2016 - Las Vegas, Nevada</h1> <p> Clinton participated in the third presidential debate at the University of Nevada Las Vegas and made a surpise appearance a debate watch party hosted by Hillary for Nevada at Craig Ranch Regional Park <br> Distance from Previous City: 871.36 miles <br> Total Distance Traveled To Date: 8,642.11 miles",
  label:"18",
    title: 'Las Vegas, Nevada'
}, {
  lat: 36.16935,
  lng: -115.1409,
  info: "<h1>November 2, 2016 - Las Vegas, Nevada</h1> <p> Clinton attended a canvass kickoff with Sec. of Labor Tom Perek at Plumbers and Pipefitters Training Center and visisted the Democratic field office and Nicky's African Hair Braiding and Love's Barbershop with congressional candidate state Sen. Ruben Kihuen <br> Distance from Previous City: 2,169.06 miles <br> Total Distance Traveled To Date: 21,740.08 miles",
  label:"47",
    title: 'Las Vegas, Nevada'
}, ];
    


    
   var infoWin = new google.maps.InfoWindow();
  var markers = locationsVegas.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
    
 
    
    
         var PolylineSeventeenCoordinates = [
    {lat: 47.603229, lng: -122.33028},
    {lat: 36.16935, lng: -115.1407},
     ];
    
    var PolylineSeventeen = new google.maps.Polyline({
    path: PolylineSeventeenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
 PolylineSeventeen.setMap(map);
    
    
            var PolylineEighteenCoordinates = [
    {lat: 36.16935, lng: -115.1407},
    {lat: 40.715, lng: -74.008},
     ];
    
    var PolylineEighteen = new google.maps.Polyline({
    path: PolylineEighteenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineEighteen.setMap(map);
    
    
               var PolylineNineteenCoordinates = [
    {lat: 40.715, lng: -74.008},
    {lat: 41.505546, lng: -81.6915},
     ];
    
    var PolylineNineteen = new google.maps.Polyline({
    path: PolylineNineteenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineNineteen.setMap(map);
    
 var locationsNYC = [{
  lat: 40.713054,
  lng: -74.007228,
  info: "<h1>October 5, 2016 - New York, New York</h1> <p> Clinton attended a fundraiser at the St. Regis Hotel <br> Distance from Previous City: 203.46 miles <br> Total Distance Traveled To Date: 1,303.27 miles",
  label: '8',
title: 'New York City, New York'
}, {
  lat: 40.715,
  lng: -74.008,
  info: "<h1>October 20, 2016 - New York, New York</h1> <p> Clinton attended and addressed the Alfred E. Smith Memorial Foundation Dinner at the Waldorf Astoria <br> Distance from Previous City: 2,227.53 miles <br> Total Distance Traveled To Date: 10,869.64 miles",
  label:"19",
    title: 'New York City, New York'
},  {
  lat: 40.714,
  lng: -74.005,
  info: "<h1>October 24, 2016 - New York, New York</h1> <p> Clinton attended a fundraiser at the Hudson Mercantile <br> Distance from Previous City: 204.71 miles <br> Total Distance Traveled To Date: 13,075.32 miles",
  label:"27",
    title: 'New York City, New York'
},];
    
    
 
   var infoWin = new google.maps.InfoWindow();
  var markers = locationsNYC.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });

 
    
               var PolylineTwentyCoordinates = [
    {lat: 41.505546, lng: -81.6915},
    {lat: 40.442169, lng: -79.994945},
     ];
    
    var PolylineTwenty= new google.maps.Polyline({
    path: PolylineTwentyCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwenty.setMap(map);
    
   
    
               var PolylineTwentyOneCoordinates = [
    {lat: 40.442169, lng: -79.994945},
    {lat: 39.951061, lng: -75.16562},
     ];
    
    var PolylineTwentyOne = new google.maps.Polyline({
    path: PolylineTwentyOneCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentyOne.setMap(map);
    
     var Durham = {lat: 35.996948, lng: -78.899023};
    var DurhamIcon = "23"
    
    
    
    var markerDurham = new google.maps.Marker({
    position: Durham,
    map: map,
    title:'Durham, North Carolina',
        label: DurhamIcon 
    });
    
      var contentStringDurham = "<h1>October 23, 2016 - Durham, North Carolina</h1> <p> Clinton spoke to a Union Baptist Church congregation <br> Distance from Previous City: 340.49 miles <br> Total Distance Traveled To Date: 11,985.87 miles"

    
    var infowindowDurham = new google.maps.InfoWindow({
    content: contentStringDurham
  });
    
    markerDurham.addListener('click', function() {
    infowindowDurham.open(map, markerDurham);
  });
    
        var PolylineTwentyTwoCoordinates = [
    {lat: 39.951061, lng: -75.16562},
    {lat: 35.996948, lng: -78.899023},
     ];
    
    var PolylineTwentyTwo = new google.maps.Polyline({
    path: PolylineTwentyTwoCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentyTwo.setMap(map);
    
   
    
         var PolylineTwentyThreeCoordinates = [
    {lat: 35.996948, lng: -78.899023},
    {lat: 35.781295, lng: -78.64167},
     ];
    
    var PolylineTwentyThree = new google.maps.Polyline({
    path: PolylineTwentyThreeCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentyThree.setMap(map);
    
    
       var PolylineTwentyFourCoordinates = [
    {lat: 35.781295, lng: -78.64167},
    {lat: 35.2266082, lng: -80.86},
     ];
    
    var PolylineTwentyFour = new google.maps.Polyline({
    path: PolylineTwentyFourCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentyFour.setMap(map);
    
    var locationsCharlotte = [{
  lat: 35.2266082,
  lng: -80.8528673,
  info: "<h1>October 2, 2016 - Charlotte, North Carolina</h1> <p> Clinton spoke at Little Rock A.M.E. Zion Church and met with leaders of the community at Mert's Heart and Soul",
  label: '1',
title: 'Charlotte, North Carolina'
}, {
  lat: 35.2266082,
  lng: -80.86,
  info: "<h1>October 23, 2016 - Charlotte, North Carolina</h1> <p> Clinton attended an early vote event at the University of North Carolina at Charlotte's Belk Plaza <br> Distance from Previous City: 129.57 miles <br> Total Distance Traveled To Date: 12,136.16 miles",
  label:"25",
    title: 'Charlotte, North Carolina'
}, ];
    
  
    
   var infoWin = new google.maps.InfoWindow();
  var markers = locationsCharlotte.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
    
    
 
    
    
        var PolylineTwentyFiveCoordinates = [
    {lat: 35.2266082, lng: -80.86},
    {lat: 42.990926, lng: -71.463091},
     ];
    
    var PolylineTwentyFive = new google.maps.Polyline({
    path: PolylineTwentyFiveCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentyFive.setMap(map);
    
    
     var PolylineTwentySixCoordinates = [
    {lat: 42.990926, lng: -71.463091},
    {lat: 40.714, lng: -74.005},
     ];
    
    var PolylineTwentySix = new google.maps.Polyline({
    path: PolylineTwentySixCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentySix.setMap(map);
    
     var CoconutCreek = {lat: 26.278411, lng: -80.182411};
    var CoconutCreekIcon = "28"
    
    
    
    var markerCC = new google.maps.Marker({
    position: CoconutCreek,
    map: map,
    title:'Coconut Creek, Florida',
        label: CoconutCreekIcon 
    });
    
     var contentStringCC = "<h1>October 25, 2016 - Coconut Creek, Florida</h1> <p> Clinton attended an early voting rally in Broward College North Campus' Omni Auditorium <br> Distance from Previous City: 1,058.15 miles <br> Total Distance Traveled To Date: 14,133.47 miles "

    
    var infowindowCC = new google.maps.InfoWindow({
    content: contentStringCC
  });
    
    markerCC.addListener('click', function() {
    infowindowCC.open(map, markerCC);
  });
    
     var PolylineTwentySevenCoordinates = [
    {lat: 40.714, lng: -74.005},
    {lat: 26.278411, lng: -80.182411},
     ];
    
    var PolylineTwentySeven = new google.maps.Polyline({
    path: PolylineTwentySevenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentySeven.setMap(map);
    
       var locationsMiami = [{
  lat: 25.775084,
  lng: -80.194702,
  info: "<h1>October 11, 2016 - Miami, Florida</h1> <p> Clinton attended a rally with Al Gore in the Miami Dade College's Theodore Gibson Center on its Kendall campus <br> Distance from Previous City: 993.51 miles <br> Total Distance Traveled To Date: 3,786.82 miles",
  label: '12',
title: 'Miami, Florida'
}, {
  lat: 25.775084,
  lng: -80.1949,
  info: "<h1>October 25, 2016 - Miami, Florida</h1> <p> Clinton attended the Adele concert at American Airlines Arena <br> Distance from Previous City: 34.79 miles <br> Total Distance Traveled To Date: 14,168.26 miles",
  label:"29",
    title: 'Miami, Florida'
}, {
  lat: 25.775084,
  lng: -80.1952,
  info: "<h1>October 29, 2016 - Miami, Florida</h1> <p> Clinton attended a Get Out The Vote event at the Bayfront Park Amphitheater with Jennifer Lopez <br> Distance from Previous City: 242.47 miles <br> Total Distance Traveled To Date: 17,217.04 miles",
  label:"38",
    title: 'Miami, Florida'
},];
    

   var infoWin = new google.maps.InfoWindow();
  var markers = locationsMiami.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
    
    
       var PolylineTwentyEightCoordinates = [
    {lat: 26.278411, lng: -80.182411},
    {lat: 25.775084, lng: -80.1949},
     ];
    
    var PolylineTwentyEight = new google.maps.Polyline({
    path: PolylineTwentyEightCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentyEight.setMap(map);
    
    var Pinecrest = {lat: 25.667011, lng: -80.302376};
    var PinecrestIcon = "30"
    
    
    
    var markerPinecrest = new google.maps.Marker({
    position: Pinecrest,
    map: map,
    title:'Pinecrest, Florida',
        label: PinecrestIcon 
    });
    
        var contentStringPinecrest = "<h1>October 25, 2016 - Pinecrest, Florida</h1> <p> Clinton attended a fundraiser <br> Distance from Previous City: 10.03 miles <br> Total Distance Traveled To Date: 14,178.29 miles"

    var infowindowPinecrest = new google.maps.InfoWindow({
    content: contentStringPinecrest
  });
    
    markerPinecrest.addListener('click', function() {
        infowindowLW.close();
    infowindowPinecrest.open(map, markerPinecrest);
  });
    
         var PolylineTwentyNineCoordinates = [
    {lat: 25.775084, lng: -80.1949},
    {lat: 25.667011, lng: -80.302376},
     ];
    
    var PolylineTwentyNine = new google.maps.Polyline({
    path: PolylineTwentyNineCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineTwentyNine.setMap(map);
    
    var LakeWorth = {lat: 26.609859, lng: -80.058568};
    var LakeWorthIcon = "31"
    
    
    
    var markerLW = new google.maps.Marker({
    position: LakeWorth,
    map: map,
    title:'Lake Worth, Florida',
        label: LakeWorthIcon 
    });
    
       var contentStringLW = "<h1>October 26, 2016 - Pinecrest, Florida</h1> <p> Clinton attended an early voting rally in the Elizabeth W. Erling Gymnasium on the campus of Palm Beach State College at Lake Worth <br> Distance from Previous City: 66.88 miles <br> Total Distance Traveled To Date: 14,245.17 miles"
    
    var infowindowLW = new google.maps.InfoWindow({
    content: contentStringLW
  });
    
    markerLW.addListener('click', function() {
        infowindowPinecrest.close();
        infowindowTampa.close();
    infowindowLW.open(map, markerLW);
  });
    
      var PolylineThirtyCoordinates = [
    {lat: 25.667011, lng: -80.302376},
    {lat: 26.609859, lng: -80.058568},
     ];
    
    var PolylineThirty = new google.maps.Polyline({
    path: PolylineThirtyCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirty.setMap(map)
    
     var Tampa = {lat: 27.947423, lng: -82.458776};
    var TampaIcon = "32"
    
    
    
    var markerTampa = new google.maps.Marker({
    position: Tampa,
    map: map,
    title:'Tampa, Florida',
        label: TampaIcon 
    });
    
       var contentStringTampa = "<h1>October 26, 2016 - Tampa, Florida</h1> <p> Clinton attended an early voting rally at Curtis Hixon Waterfront Park <br> Distance from Previous City: 173.96 miles <br> Total Distance Traveled To Date: 14,419.13 miles"
    
    var infowindowTampa = new google.maps.InfoWindow({
    content: contentStringTampa
  });
    
    markerTampa.addListener('click', function() {
        infowindowLW.close();
        infowindowGSO.close();
    infowindowTampa.open(map, markerTampa);
  });
    
    var PolylineThirtyOneCoordinates = [
    {lat: 26.609859, lng: -80.058568},
    {lat: 27.947423, lng: -82.458776},
     ];
    
    var PolylineThirtyOne = new google.maps.Polyline({
    path: PolylineThirtyOneCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtyOne.setMap(map)
    
    var Greensboro = {lat: 36.072701, lng: -79.793899};
    var GreensboroIcon = "33"
    
    
    
    var markerGSO = new google.maps.Marker({
    position: Greensboro,
    map: map,
    title:'Greensboro, North Carolina',
        label: GreensboroIcon 
    });
    
        var contentStringGSO = "<h1>October 27, 2016 - Greensboro, North Carolina</h1> <p> Clinton surprised people in line to vote early at the Leonard J. Kaplan Wellness Center on the campus of UNC-Greensboro and attended the North Carolina A&T State University homecoming pep rally as a surprise special guest <br> Distance from Previous City: 582.63 miles <br> Total Distance Traveled To Date: 15,001.76 miles "
    
    var infowindowGSO = new google.maps.InfoWindow({
    content: contentStringGSO
  });
    
    markerGSO.addListener('click', function() {
        infowindowTampa.close();
        infowindowWS.close();
    infowindowGSO.open(map, markerGSO);
  });
    
     var PolylineThirtyTwoCoordinates = [
    {lat: 27.947423, lng: -82.458776},
    {lat: 36.072701, lng: -79.793899},
     ];
    
    var PolylineThirtyTwo = new google.maps.Polyline({
    path: PolylineThirtyTwoCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtyTwo.setMap(map)
    
    var WinstonSalem = {lat: 36.096261, lng: -80.243735};
    var WinstonSalemIcon = "34"
    
    
    
    var markerWS = new google.maps.Marker({
    position: WinstonSalem,
    map: map,
    title:'Winston Salem, North Carolina',
        label: WinstonSalemIcon 
    });
    
     var contentStringWS = "<h1>October 27, 2016 - Winston Salem, North Carolina</h1> <p> Clinton was joined by First Lady Michelle Obama at an early vote rally at Lawrence Joel Veterans Memorial Coliseum on the campus of Wake Forest University <br> Distance from Previous City: 25.17 miles <br> Total Distance Traveled To Date: 15,026.93 miles"
    
    var infowindowWS = new google.maps.InfoWindow({
    content: contentStringWS
  });
    
    markerWS.addListener('click', function() {
        infowindowGSO.close();
        infowindowCedarRapids.close();
    infowindowWS.open(map, markerWS);
  });
    
    
    var PolylineThirtyThreeCoordinates = [
    {lat: 36.072701, lng: -79.793899},
    {lat: 36.096261, lng: -80.243735},
     ];
    
    var PolylineThirtyThree = new google.maps.Polyline({
    path: PolylineThirtyThreeCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtyThree.setMap(map)
    
    var CedarRapids = {lat: 41.978122, lng: -91.669808};
    var CedarRapidsIcon = "35"
    
    
    
    var markerCedarRapids = new google.maps.Marker({
    position: CedarRapids,
    map: map,
    title:'CedarRapids, Iowa',
        label: CedarRapidsIcon 
    });
    
    var contentStringCedarRapids = "<h1>October 28, 2016 - Cedar Rapids, Iowa</h1> <p> Clinton was joined by Cecile Richards, Stephanie Schriock and Ilyse Hogue at NewBo City Market Courtyard for a Women Win early vote rally <br> Distance from Previous City: 734.65 miles <br> Total Distance Traveled To Date: 15,761.58 miles "
    
    
    var infowindowCedarRapids = new google.maps.InfoWindow({
    content: contentStringCedarRapids
  });
    
    markerCedarRapids.addListener('click', function() {
        infowindowWS.close();
        infowindowDesMoines.close();
    infowindowCedarRapids.open(map, markerCedarRapids);
  });

    
        var PolylineThirtyFourCoordinates = [
    {lat: 36.096261, lng: -80.243735},
    {lat: 41.978122, lng: -91.669808},
     ];
    
    var PolylineThirtyFour = new google.maps.Polyline({
    path: PolylineThirtyFourCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtyFour.setMap(map)
    
    var DesMoines = {lat: 41.588822, lng: -93.620309};
    var DesMoinesIcon = "36"
    
    
    
    var markerDesMoines = new google.maps.Marker({
    position: DesMoines,
    map: map,
    title:'Des Moines, Iowa',
        label: DesMoinesIcon 
    });
    
        var PolylineThirtyFiveCoordinates = [
    {lat: 41.978122, lng: -91.669808},
    {lat: 41.588822, lng: -93.620309},
     ];
    
      var contentStringDesMoines = "<h1>October 28, 2016 - Des Moines, Iowa</h1> <p> Clinton attended a Women Win early vote rally at Theodore Roosevelt High School <br> Distance from Previous City: 104.02 miles <br> Total Distance Traveled To Date: 15,865.60 miles"
    
    var infowindowDesMoines = new google.maps.InfoWindow({
    content: contentStringDesMoines
  });
    
    markerDesMoines.addListener('click', function() {
        infowindowCedarRapids.close();
        infowindowDaytonaBeach.close();
    infowindowDesMoines.open(map, markerDesMoines);
  });

    
    var PolylineThirtyFive = new google.maps.Polyline({
    path: PolylineThirtyFiveCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtyFive.setMap(map)
    
   var DaytonaBeach = {lat: 29.207056, lng: -81.020739};
    var DaytonaBeachIcon = "37"
    
    
    
    var markerDaytonaBeach = new google.maps.Marker({
    position: DaytonaBeach,
    map: map,
    title:'Daytona Beach, Florida',
        label: DaytonaBeachIcon 
    });
    
        var contentStringDaytonaBeach = "<h1>October 29, 2016 - Daytona Beach, Florida</h1> <p> Clinton made an unannounced stop at Bethune-Cookman University's homecoming football game and attended a canvas kick-off at the John H. Dickerson Community Center <br> Distance from Previous City: 1,108.97 miles <br> Total Distance Traveled To Date: 16,974.57 miles"
    
    var infowindowDaytonaBeach = new google.maps.InfoWindow({
    content: contentStringDaytonaBeach
  });
    
    markerDaytonaBeach.addListener('click', function() {
        infowindowDesMoines.close();
    infowindowDaytonaBeach.open(map, markerDaytonaBeach);
  });
    
     var PolylineThirtySixCoordinates = [
    {lat: 41.588822, lng: -93.620309},
    {lat: 29.207056, lng: -81.020739},
     ];
    
    var PolylineThirtySix = new google.maps.Polyline({
    path: PolylineThirtySixCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtySix.setMap(map)
    
        var PolylineThirtySevenCoordinates = [
    {lat: 29.207056, lng: -81.020739},
    {lat: 25.775084, lng: -80.1952},
     ];
    
    var PolylineThirtySeven = new google.maps.Polyline({
    path: PolylineThirtySevenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtySeven.setMap(map)
    
 
    
       var PolylineThirtyEightCoordinates = [
    {lat: 25.775084, lng: -80.1952},
    {lat: 26.124163, lng: -80.143586},
     ];
    
    var PolylineThirtyEight= new google.maps.Polyline({
    path: PolylineThirtyEightCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtyEight.setMap(map)
    
      var WiltonManors = {lat: 26.16078, lng: -80.139038};
    var WiltonManorsIcon = "40"
    
    
    
    var markerWM = new google.maps.Marker({
    position: WiltonManors,
    map: map,
    title:'Wilton Manors, Florida',
        label: WiltonManorsIcon
    });
    
        var contentStringWM = "<h1>October 30, 2016 - Wilton Manors, Florida</h1> <p> Clinton attended a Community in Unity rally and concert at The Manor Complex <br> Distance from Previous City: 2.55 miles <br> Total Distance Traveled To Date: 17,243.92 miles"
    
    var infowindowWM = new google.maps.InfoWindow({
    content: contentStringWM
  });
    
    markerWM.addListener('click', function() {
    infowindowWM.open(map, markerWM);
  });
    
    var PolylineThirtyNineCoordinates = [
    {lat: 26.124163, lng: -80.143586},
    {lat: 26.16078, lng: -80.139038},
     ];
    
    var PolylineThirtyNine= new google.maps.Polyline({
    path: PolylineThirtyNineCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineThirtyNine.setMap(map)
    
          var locationsCleveland = [{
  lat: 41.505546,
  lng: -81.6915,
  info: "<h1>October 21, 2016 - Cleveland, Ohio</h1> <p> Clinton met iwth Black Lives Matter activists Deray Mckesson and Brittany Packnett and attended an early vote event in Cuyahoga Community College's Recreation Center <br> Distance from Previous City: 403.63 miles <br> Total Distance Traveled To Date: 11,273.27 miles",
  label: '20',
title: 'Cleveland, Ohio'
}, {
  lat: 41.505546,
  lng: -81.69,
  info: "<h1>October 31, 2016 - Cleveland, Ohio</h1> <p> Clinton stopped at Angie's Soul Cafe and greeted customers and staff in addition to ordering lunch to go <br> Distance from Previous City: 1,063.91 miles <br> Total Distance Traveled To Date: 18,307.83 miles",
  label:"41",
    title: 'Cleveland, Ohio'
},{
  lat: 41.505546,
  lng: -81.6885,
  info: "<h1>November 4, 2016 - Cleveland, Ohio</h1> <p> Clinton attended a Get Out The Vote event with Jay Z and Beyoncé in Cleveland State University's Wolstein Center <br> Distance from Previous City: 90.17 miles <br> Total Distance Traveled To Date: 24,519.85 miles",
  label:"52",
    title: 'Cleveland, Ohio'
},{
  lat: 41.505546,
  lng: -81.6870,
  info: "<h1>November 6, 2016 - Cleveland, Ohio</h1> <p> Clinton attended a Get Out The Vote event at Public Auditorium with LeBron James <br> Distance from Previous City: 358.07 miles <br> Total Distance Traveled To Date: 26,959.52 miles",
  label:"56",
    title: 'Cleveland, Ohio'
},];
    

   var infoWin = new google.maps.InfoWindow();
  var markers = locationsCleveland.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
    
    var PolylineFortyCoordinates = [
    {lat: 26.16078, lng: -80.139038},
    {lat: 41.505546, lng: -81.69},
     ];
    
    var PolylineForty= new google.maps.Polyline({
    path: PolylineFortyCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineForty.setMap(map)
    
      var Kent = {lat: 41.149028, lng: -81.360799};
    var KentIcon = "42"
    
    
    
    var markerKent = new google.maps.Marker({
    position: Kent,
    map: map,
    title:'Kent, Ohio',
        label: KentIcon
    });
    
         var contentStringKent = "<h1>October 31, 2016 - Kent, Ohio</h1> <p> Clinton attended an early vote event at Kent State University's Student Recreation and Wellness Center <br> Distance from Previous City: 29.82 miles <br> Total Distance Traveled To Date: 18,337.65 miles"
    
    var infowindowKent = new google.maps.InfoWindow({
    content: contentStringKent
  });
    
    markerKent.addListener('click', function() {
        infowindowCincy.close();
    infowindowKent.open(map, markerKent);
  });
    
     var PolylineFortyOneCoordinates = [
    {lat: 41.505546, lng: -81.69},
    {lat: 41.149028, lng: -81.360799},
     ];
    
    var PolylineFortyOne= new google.maps.Polyline({
    path: PolylineFortyOneCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortyOne.setMap(map)
    
      var Cincinatti = {lat: 39.104427, lng: -84.513808};
    var CincinattiIcon = "43"
    
    
    
    var markerCincy = new google.maps.Marker({
    position: Cincinatti,
    map: map,
    title:'Cincinatti, Ohio',
        label: CincinattiIcon
    });
    
    var contentStringCincy = "<h1>October 31, 2016 - Cincinatti, Ohio</h1> <p> Clinton was joined by Gabby Giffords and Mark Kelly for an early vote event at Smale Riverfront Park <br> Distance from Previous City: 218.84 miles <br> Total Distance Traveled To Date: 18,556.49 miles"
    
    var infowindowCincy = new google.maps.InfoWindow({
    content: contentStringCincy
  });
    
    markerCincy.addListener('click', function() {
        infowindowKent.close();
        infowindowDadeCity.close();
    infowindowCincy.open(map, markerCincy);
  });
    
         var PolylineFortyTwoCoordinates = [
    {lat: 41.149028, lng: -81.360799},
    {lat: 39.104427, lng: -84.513808},
     ];
    
    var PolylineFortyTwo= new google.maps.Polyline({
    path: PolylineFortyTwoCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortyTwo.setMap(map)
    
    var DadeCity = {lat: 28.364594, lng: -82.18912};
    var DadeCityIcon = "44"
    
    
    
    var markerDadeCity = new google.maps.Marker({
    position: DadeCity,
    map: map,
    title:'Dade City, Florida',
        label: DadeCityIcon
    });
    
    var contentStringDadeCity = "<h1>November 1, 2016 - Dade City, Florida</h1> <p> Clinton attended an early vote event at Pasco-Hernando State College East Campus <br> Distance from Previous City: 753.84 miles <br> Total Distance Traveled To Date: 19,310.33 miles"
    
    var infowindowDadeCity = new google.maps.InfoWindow({
    content: contentStringDadeCity
  });
    
    markerDadeCity.addListener('click', function() {
        infowindowCincy.close();
        infowindowSanford.close();
    infowindowDadeCity.open(map, markerDadeCity);
  });
    
     var PolylineFortyThreeCoordinates = [
    {lat: 39.104427, lng: -84.513808},
    {lat: 28.364594, lng: -82.18912},
     ];
    
    var PolylineFortyThree= new google.maps.Polyline({
    path: PolylineFortyThreeCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortyThree.setMap(map)
    
    var Sanford = {lat: 28.800795, lng: -81.273111};
    var SanfordIcon = "45"
    
    
    
    var markerSanford = new google.maps.Marker({
    position: Sanford,
    map: map,
    title:'Sanford, Florida',
        label: SanfordIcon
    });
    
    var contentStringSanford = "<h1>November 1, 2016 - Sanford, Florida</h1> <p> Clinton attended an early vote event at the Sanford Civic Center <br> Distance from Previous City: 63.22 miles <br> Total Distance Traveled To Date: 19,373.55 miles"
    
    var infowindowSanford = new google.maps.InfoWindow({
    content: contentStringSanford
  });
    
    markerSanford.addListener('click', function() {
        infowindowDadeCity.close();
    infowindowSanford.open(map, markerSanford);
  });
    
     var PolylineFortyFourCoordinates = [
    {lat: 28.364594, lng: -82.18912},
    {lat: 28.800795, lng: -81.273111},
     ];
    
    var PolylineFortyFour= new google.maps.Polyline({
    path: PolylineFortyFourCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortyFour.setMap(map)
    
           var locationsFortLauderdale = [{
  lat: 26.124163,
  lng: -80.143586,
  info: "<h1>October 30, 2016 - Fort Lauderdale, Florida</h1> <p> Clinton went to New Mount Olive Baptist for a church service and stopped at Betty's Soul Food Restaurant <br> Distance from Previous City: 24.33 miles <br> Total Distance Traveled To Date: 17,241.37 miles",
  label: '39',
title: 'Fort Lauderdale, Florida'
}, {
  lat: 26.124163,
  lng: -80.144,
  info: "<h1>November 1, 2016 - Fort Lauderdale, Florida</h1> <p> Clinton greeted early voters outside a voting site at Lauderhill Mall and attended an early vote event at Delevoe Memorial Park <br> Distance from Previous City: 197.47 miles <br> Total Distance Traveled To Date: 19,571.02 miles",
  label:"46",
    title: 'Fort Lauderdale, Florida'
},];
    

    
   var infoWin = new google.maps.InfoWindow();
  var markers = locationsFortLauderdale.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
    
   var PolylineFortyFiveCoordinates = [
    {lat: 28.800795, lng: -81.273111},
    {lat: 26.124163, lng: -80.144},
     ];
    
    var PolylineFortyFive= new google.maps.Polyline({
    path: PolylineFortyFiveCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortyFive.setMap(map)  
    
     var PolylineFortySixCoordinates = [
    {lat: 26.124163, lng: -80.144},
    {lat: 36.16935, lng: -115.1409},
     ];
    
    var PolylineFortySix= new google.maps.Polyline({
    path: PolylineFortySixCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortySix.setMap(map)  
    
        var Tempe = {lat: 33.425522, lng: -111.941253};
    var TempeIcon = "48"
    
    
    
    var markerTempe = new google.maps.Marker({
    position: Tempe,
    map: map,
    title:'Tempe, Arizona',
        label: TempeIcon
    });
    
        var contentStringTempe = "<h1>November 2, 2016 - Tempe, Arizona</h1> <p> Clinton attended an early vote event at the Sun Devil Fitness Complex Intramural Fields on the campus of Arizona State University <br> Distance from Previous City: 262.42 miles <br> Total Distance Traveled To Date: 22,002.50 miles"
    
    var infowindowTempe = new google.maps.InfoWindow({
    content: contentStringTempe
  });
    
    markerTempe.addListener('click', function() {
    infowindowTempe.open(map, markerTempe);
  });
    
      var PolylineFortySevenCoordinates = [
    {lat: 36.16935, lng: -115.1409},
    {lat: 33.425522, lng: -111.941253},
     ];
    
    var PolylineFortySeven= new google.maps.Polyline({
    path: PolylineFortySevenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortySeven.setMap(map) 
  
    
    var locationsRaleigh = [{
  lat: 35.781295,
  lng: -78.64167,
  info: "<h1>October 23, 2016 - Raleigh, North Carolina</h1> <p> Clinton attended an early vote event on The Quad on the campus of Sant Augustine's University with Mothers of the Movement <br> Distance from Previous City: 20.72 miles <br> Total Distance Traveled To Date: 12,006.59 miles",
  label: '24',
title: 'Raleigh, North Carolina'
}, {
  lat: 35.781295,
  lng: -78.64,
  info: "<h1>November 3, 2016 - Raleigh, North Carolina</h1> <p> Clinton attended an early vote rally at Coastal Credit Union Music Park at Walnut Creek and was joined by Sen. Bernie Sanders and Pharrell Williams <br> Distance from Previous City: 1,891.68 miles <br> Total Distance Traveled To Date: 23,894.18 miles",
  label:"49",
    title: 'Raleigh, North Carolina'
},{
  lat: 35.781295,
  lng: -78.63833,
  info: "<h1>November 7, 2016 - Raleigh, North Carolina</h1> <p> Clinton was joined by Bill and Chelsea, Lady Gaga and Jon Bon Jovi at a midnight Get Out The Vote rally at North Carolina State University's Reynolds Coliseum <br> Distance from Previous City: 344.82 miles <br> Total Distance Traveled To Date: 29,233.33 miles",
  label:"61",
    title: 'Raleigh, North Carolina'
},];
    

    
   var infoWin = new google.maps.InfoWindow();
  var markers = locationsRaleigh.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
    
      var PolylineFortyEightCoordinates = [
    {lat: 33.425522, lng: -111.941253},
    {lat: 35.781295, lng: -78.64},
     ];
    
    var PolylineFortyEight= new google.maps.Polyline({
    path: PolylineFortyEightCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortyEight.setMap(map) 
    
      var locationsPittsburgh = [{
  lat: 40.442169,
  lng: -79.994945,
  info: "<h1>October 22, 2016 - Pittsburgh, Pennsylvania</h1> <p> Clinton attended an organizing event at Taylor Allderdice High School with Tim Kaine <br> Distance from Previous City: 115.02 miles <br> Total Distance Traveled To Date: 11,388.29 miles",
  label: '21',
title: 'Pittsburgh, Pennslyvania'
}, {
  lat: 40.442169,
  lng: -79.994,
  info: "<h1>November 4, 2016 - Pittsburgh, Pennsylvania</h1> <p> Clinton attended an organizing event at The Great Hall at Heinz Field <br> Distance from Previous City: 330.32 miles <br> Total Distance Traveled To Date: 24,224.50 miles",
  label:"50",
    title: 'Pittsburgh, Pennslyvania'
},{
  lat: 40.442169,
  lng: -79.993055,
  info: "<h1>November 7, 2016 - Pittsburgh, Pennsylvania</h1> <p> Clinton attended a Get Out The Vote event in front of the University of Pittsburgh's Cathedral of Learning <br> Distance from Previous City: 473.68 miles <br> Total Distance Traveled To Date: 27,965.95 miles",
  label:"58",
    title: 'Pittsburgh, Pennslyvania'
},];
    

    
   var infoWin = new google.maps.InfoWindow();
  var markers = locationsPittsburgh.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });  
    
     var PolylineFortyNineCoordinates = [
    {lat: 35.781295, lng: -78.64},
    {lat: 40.442169, lng: -79.994},
     ];
    
    var PolylineFortyNine= new google.maps.Polyline({
    path: PolylineFortyNineCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFortyNine.setMap(map) 
    
        var locationsDetroit = [{
  lat: 42.332916,
  lng: -83.047853,
  info: "<h1>October 10, 2016 - Detroit, Michigan</h1> <p> Clinton attended a voter registration event at the Matthaei Center on the campus of Wayne State University <br> Distance from Previous City: 454.43 miles <br> Total Distance Traveled To Date: 2,629.52 miles",
  label: '10',
title: 'Detroit, Michigan'
}, {
  lat: 42.332916,
  lng: -83.047953,
  info: "<h1>November 4, 2016 - Detroit, Michigan</h1> <p> Clinton attended a Get Out The Vote rally at Eastern Market <br> Distance from Previous City: 205.18 miles <br> Total Distance Traveled To Date: 24,429.68 miles",
  label: '51',
    title: 'Detroit, Michigan'
},];
    

   var infoWin = new google.maps.InfoWindow();
  var markers = locationsDetroit.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  }); 
     
    var PolylineFiftyCoordinates = [
    {lat: 40.442169, lng: -79.994},
    {lat: 42.332916, lng: -83.047953},
     ];
    
    var PolylineFifty= new google.maps.Polyline({
    path: PolylineFiftyCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFifty.setMap(map)
    
       var PolylineFiftyOneCoordinates = [
    {lat: 42.332916, lng: -83.047953},
    {lat: 41.505546, lng: -81.6885},
     ];
    
    var PolylineFiftyOne= new google.maps.Polyline({
    path: PolylineFiftyOneCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
     PolylineFiftyOne.setMap(map)
    
    
    var PembrokePines = {lat: 26.006156, lng: -80.279747};
    var PembrokePinesIcon = "53"
    
    
    
    var markerPP = new google.maps.Marker({
    position: PembrokePines,
    map: map,
    title:'Pembroke Pines, Florida',
        label: PembrokePinesIcon
    });
    
    var contentStringPP = "<h1>November 5, 2016 - Pembroke Pines, Florida</h1> <p> Clinton attended a Get Out the Vote event at C.B. Smith Park <br> Distance from Previous City: 1,073.98 miles <br> Total Distance Traveled To Date: 25,593.83 miles"
    
    var infowindowPP = new google.maps.InfoWindow({
    content: contentStringPP
  });
    
    markerPP.addListener('click', function() {
    infowindowPP.open(map, markerPP);
  });
    
        var PolylineFiftyTwoCoordinates = [
    {lat: 41.505546, lng: -81.6885},
    {lat: 26.006156, lng: -80.279747},
     ];
    
    var PolylineFiftyTwo= new google.maps.Polyline({
    path: PolylineFiftyTwoCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftyTwo.setMap(map)
    
          var locationsPhiladelphia = [{
  lat: 39.951061,
  lng: -75.16562,
  info: "<h1>October 22, 2016 - Philadelphia, Pennslyvania</h1> <p> Clinton attended an organizing event at Dunning-Cohen Championship Field in Penn Park with Tim Kaine <br> Distance from Previous City: 257.09 miles <br> Total Distance Traveled To Date: 11,645.38 miles",
  label: '22',
title: 'Philadelphia, Pennsylvania'
}, {
  lat: 39.951061,
  lng: -75.16,
  info: "<h1>November 5, 2016 - Philadelphia, Pennslyvania</h1> <p> Clinton attended a Get Out The Vote event with Katy Perry at the Mann Center <br> Distance from Previous City: 1,007.62 miles <br> Total Distance Traveled To Date: 26,601.45 miles",
  label: '54',
    title: 'Philadelphia, Pennsylvania'
}, {
  lat: 39.951061,
  lng: -75.15438,
  info: "<h1>November 6, 2016 - Philadelphia, Pennslyvania</h1> <p> Clinton spoke at Mt. Airy Church of God <br> Distance from Previous City: 0 miles <br> Total Distance Traveled To Date: 26,601.45 miles",
  label: '55',
    title: 'Philadelphia, Pennsylvania'
}, {
  lat: 39.951061,
  lng: -75.14876,
  info: "<h1>November 7, 2016 - Philadelphia, Pennslyvania</h1> <p> Clinton is joined by President Obama, Michelle Obama, Bill and Chelsea, Bruce Springsteen and Jon Bon Jovi for a rally on Independence Hall <br> Distance from Previous City: 581.94 miles <br> Total Distance Traveled To Date: 28,888.51 miles",
  label: '60',
    title: 'Philadelphia, Pennsylvania'
},];
  

   var infoWin = new google.maps.InfoWindow();
  var markers = locationsPhiladelphia.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  }); 
    
         var PolylineFiftyThreeCoordinates = [
    {lat: 26.006156, lng: -80.279747},
    {lat: 39.951061, lng: -75.16},
     ];
    
    var PolylineFiftyThree= new google.maps.Polyline({
    path: PolylineFiftyThreeCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftyThree.setMap(map)
    
       var PolylineFiftyFourCoordinates = [
    {lat: 39.951061, lng: -75.16},
    {lat: 39.951061, lng: -75.15438},
     ];
    
    var PolylineFiftyFour= new google.maps.Polyline({
    path: PolylineFiftyFourCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftyFour.setMap(map)
  
       var PolylineFiftyFiveCoordinates = [
    {lat: 39.951061, lng: -75.15438},
    {lat: 41.505546, lng: -81.6870},
     ];
    
    var PolylineFiftyFive= new google.maps.Polyline({
    path: PolylineFiftyFiveCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftyFive.setMap(map)
  
               var locationsManchester = [{
  lat: 42.990926,
  lng: -71.463091,
  info: "<h1>October 24, 2016 - Manchester, New Hampshire</h1> <p> Clinton is joined by Sen. Elizabeth Warren at a rally at Saint Anselm College <br> Distance from Previous City: 734.45 miles <br> Total Distance Traveled To Date: 12,870.61 miles",
  label: '26',
title: 'Manchester, New Hampshire'
}, {
  lat: 42.990926,
  lng: -71.463,
  info: "<h1>November 6, 2016 - Manchester, New Hampshire</h1> <p> Clinton attended a Get Out The Vote event at the Radisson Hotel <br> Distance from Previous City: 532.75 miles <br> Total Distance Traveled To Date: 27,492.27 miles",
  label: '57',
    title: 'Manchester, New Hampshire'
},];
    
   var infoWin = new google.maps.InfoWindow();
  var markers = locationsManchester.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
        title: location.title
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  }); 
    
    var PolylineFiftyFiveCoordinates = [
    {lat: 41.505546, lng: -81.6870},
    {lat: 42.990926, lng: -71.463},
     ];
    
    var PolylineFiftyFive= new google.maps.Polyline({
    path: PolylineFiftyFiveCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftyFive.setMap(map)
    
      var PolylineFiftySixCoordinates = [
    {lat: 42.990926, lng: -71.463},
    {lat: 40.442169, lng: -79.993055},
     ];
    
    var PolylineFiftySix= new google.maps.Polyline({
    path: PolylineFiftySixCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftySix.setMap(map)

    var GrandRapids = {lat: 42.965446, lng: -85.670209};
    var GrandRapidsIcon = "59"
    
    
    
    var markerGR = new google.maps.Marker({
    position: GrandRapids,
    map: map,
    title:'Grand Rapids, Michigan',
        label: GrandRapidsIcon
    });
    
     var contentStringGR = "<h1>November 7, 2016 - Grand Rapids, Michigan</h1> <p> Clinton attended a Get Out the Vote rally at Grand Valley State University Fieldhouse <br> Distance from Previous City: 340.62 miles <br> Total Distance Traveled To Date: 28,306.57 miles"
    
    var infowindowGR = new google.maps.InfoWindow({
    content: contentStringGR
  });
    
    markerGR.addListener('click', function() {
    infowindowGR.open(map, markerGR);
  });
    
    
    
      var PolylineFiftySevenCoordinates = [
    {lat: 40.442169, lng: -79.993055},
    {lat: 42.965446, lng: -85.670209},
     ];
    
    var PolylineFiftySeven= new google.maps.Polyline({
    path: PolylineFiftySevenCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftySeven.setMap(map)
    
         var PolylineFiftyEightCoordinates = [
    {lat: 42.965446, lng: -85.670209},
    {lat: 39.951061, lng: -75.14876},
     ];
    
    var PolylineFiftyEight= new google.maps.Polyline({
    path: PolylineFiftyEightCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftyEight.setMap(map)
    
    var PolylineFiftyNineCoordinates = [
    {lat: 39.951061, lng: -75.14876},
    {lat: 35.781295, lng: -78.63833},
     ];
    
    var PolylineFiftyNine= new google.maps.Polyline({
    path: PolylineFiftyNineCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineFiftyNine.setMap(map)
    
  var Chappaqua = {lat: 41.158682, lng: -73.772661};
    var ChappaquaIcon = "62"
    
    
    
    var markerChappaqua = new google.maps.Marker({
    position: Chappaqua,
    map: map,
    title:'Chappaqua, New York',
        label: ChappaquaIcon
    });
    
    var contentStringChappaqua = "<h1>November 8, 2016 - Chappaqua, New York</h1> <p> Clinton votes at Douglas G. Grafflin Elementary School with Bill <br> Distance from Previous City: 455.25 miles <br> Total Distance Traveled From October 1 - November 8: 29,688.58 miles (the circumference of Earth is 24,901 miles!)"

    
    var infowindowChappaqua = new google.maps.InfoWindow({
    content: contentStringChappaqua
  });
    
    markerChappaqua.addListener('click', function() {
    infowindowChappaqua.open(map, markerChappaqua);
  });
    
     var PolylineSixtyCoordinates = [
    {lat: 35.781295, lng: -78.63833},
    {lat: 41.158682, lng: -73.772661},
     ];
    
    var PolylineSixty= new google.maps.Polyline({
    path: PolylineSixtyCoordinates,
    geodesic: true,
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2
    
    });
    
   
    PolylineSixty.setMap(map)
    
     document.getElementById('center').addEventListener('click', function() {
      map.panTo(USCenter),
      map.setZoom(4.52)
  });
    
});
