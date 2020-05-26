function iniciarMap(){
    var coord = {lat: 8.9460062 ,lng: -75.4500893};
    var map = new google.maps.Map(document.getElementById('google-maps'),{
      zoom: 16,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
