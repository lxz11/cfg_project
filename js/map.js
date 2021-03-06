function initMap() {

    var items = [
      { position: { lat: 51.5154, lng: -0.1200 }, label: "Intro to coding" },
      { position: { lat: 51.5275, lng: -0.0700 }, label: "Conference" },
      { position: { lat: 51.5396, lng: -0.0300 }, label: "Networking Dinner" }
    ];

    var closeAll = function() {
      items.forEach(function(x) {
        x.info.close();
      });
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 51.5275, lng: -0.0700}
    });

    items.forEach(function(item) {
      var marker = new google.maps.Marker({
        position: item.position,
        map: map
      });

      var info = new google.maps.InfoWindow({
        content: item.label
      });

      item.info = info;

      marker.addListener('click', function() {
        closeAll();
        info.open(map, marker);
      });
    });
}