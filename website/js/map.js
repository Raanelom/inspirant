L.mapbox.accessToken = 'pk.eyJ1IjoiemllbWFpbCIsImEiOiJja3hvcDY1YzAwMXprMnFtdnpsa3JjYWt4In0.lvJu2e6CvSipQs5Uakayzg';
var map = L.mapbox.map('map')
    .setView([51.94396451510416, 4.470387454615871], 15)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
var marker = L.marker([51.94396451510416, 4.470387454615871], {
    icon: L.mapbox.marker.icon({
        'marker-color': '#007bff'
    })
}).addTo(map);