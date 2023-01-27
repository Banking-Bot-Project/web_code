mapboxgl.accessToken = 'pk.eyJ1IjoiYWpheTE2IiwiYSI6ImNsZDc3MW8wczEyNHgzdnA5cWRtM3M5M2cifQ.eTGOa24E4325BaCrX6zdtQ';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom:9,
    center: [144.946457, -37.840935]  
  });





  function loadMap(){
    map.on('load', function(){
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type:'geojson',
          data:{
            'type': 'FeatureCollection',
            'features': [
             {
                'type': 'Feature',
                'geometry':
                 {
                  'type': 'Point',
                  'coordinates': [144.946457, -37.840935]
                },
                properties:{
                  storeId: '0001',
                  icon:'shop'
                }
               

              }
            ]
          }
        },
        
      layout: {
       'icon-image': '{icon}-15', // reference the image
       'icon-size': 1.5,
       'text-field': '{storeId}',
       'text-font': ['open Sans Semibold','Arial Unicode MS Bold'],
       'text-offset': [0, 0.9],
       'text-anchor': 'top'
      }
    });
  });
  
}
loadMap();