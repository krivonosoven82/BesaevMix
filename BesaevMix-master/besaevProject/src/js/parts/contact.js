function initMap() {
  const ZAPOROZHYE = {lat: 47.4822423, lng: 34.6639561};
  map = new google.maps.Map(document.getElementById('map'), {
  center: ZAPOROZHYE,
  zoom: 18
});
var marker = new google.maps.Marker({
  position: ZAPOROZHYE,
  map: map
  });
}
