// Initialize and add the map
function initMap() {
    
    const delicatearch = { lat: 38.7436, lng: 109.4993 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: delicatearch,
    });
    
    const marker = new google.maps.Marker({
      position: delicatearch,
      map: map,
    });
  }
  
  window.initMap = initMap;