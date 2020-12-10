function init(){

  let myMap = new ymaps.Map("map", {
    center: [55.75864051344586,37.62209300000001],
    controls: ['zoomControl'],
    zoom: 12
  });

  let coordsEntity = [
    {
      coord: [55.75283428915262,37.618887843951306],
      type: 'entity'
    },
    {
      coord: [55.7716110915686,37.600348415240376],
      type: 'entity'
    },
    {
      coord: [55.75864251753203,37.64017385469351],
      type: 'entity'
    },
    {
      coord: [55.765030565522814,37.65459341035758],
      type: 'entity'
    },
    {
      coord: [55.738697304665365,37.660429897173984],
      type: 'entity'
    }
  ];

  let coordsIndividual = [
    {
      coord: [55.73366097190856,37.72703451143179],
      type: 'individual'
    },
    {
      coord: [55.77083696993162,37.69270223604117],
      type: 'individual'
    },
    {
      coord: [55.752447043042125,37.57734579072866],
      type: 'individual'
    },
    {
      coord: [55.75748094134621,37.548850002154445],
      type: 'individual'
    },
    {
      coord: [55.77973843666735,37.53134054170521],
      type: 'individual'
    }
  ];

  let collectionEntity, collectionIndivudual;

  collectionEntity = new ymaps.GeoObjectCollection();
  collectionIndivudual = new ymaps.GeoObjectCollection();


  for (let i = 0; i < coordsEntity.length; ++i) {
    collectionEntity.add(new ymaps.Placemark(coordsEntity[i].coord, {
      balloonContentBody: 'Текст в балуне',
    },{
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [44, 44],
      iconImageOffset: [-22, -22]
    }));
  }

  for (let i = 0; i < coordsIndividual.length; ++i) {
    collectionIndivudual.add(new ymaps.Placemark(coordsIndividual[i].coord, {
      balloonContentBody: 'Текст в балуне',
    },{
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [44, 44],
      iconImageOffset: [-22, -22]
    }));
  }

  myMap.geoObjects.add(collectionEntity).add(collectionIndivudual);
}

export default init;
