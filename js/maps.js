/**
 * Created by Artem on 2/23/2017.
 */
var myCenter = new google.maps.LatLng(43.4476481,-79.6863191,18.56);

function initialize() {
    var mapProp = {
        center:myCenter,
        zoom:14,
        scrollwheel:false,
        draggable:false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position: myCenter
    });

    marker.setMap(map);}

google.maps.event.addDomListener(window, 'load', initialize);
