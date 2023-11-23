// See post: https://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map('map', {
  center: [-1.652, 102.986],
  minZoom: 2,
  zoom: 8,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="leaf-demo.js"]')
  .attr('src')
  .replace('leaf-demo.js', '')

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

for (var i = 0; i < markers.length; ++i) {
  // Gunakan path relatif untuk logo
  var logoPath = './' + markers[i].logo;

  L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
    .bindPopup(
      '<a href="' +
      markers[i].url +
      '" target="_blank">' +
      '<div style="text-align: center;">' + // Tambahkan div dengan tata letak pusat
      '<img src="' + logoPath + '" alt="Logo ' + markers[i].name + '" style="max-width: 100px;"><br>' +
      '<strong>' + markers[i].name + '</strong><br>' + '</a>' +
      'Alamat: ' + markers[i].address + '<br>' +
      '</div>' 
      
    )
    .addTo(map);
}