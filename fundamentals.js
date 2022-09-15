const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [
        { name: "Path Smith", address: "1 Main Street"},
        { name: "Sheila Dwyer", address: "2 High Street"},
    ],
    type : {
        make : "Toyota",
        model : "Corolla",
        cc : "1.8"
    },
    features : [
        'Parking assist', 'Alarm', 'Tow-bar'
    ],
    registration : {
        year : "201",
        countyCode : "WD",
        number : "1058"
    }
  };

  aCar.mileage = '10000'
  aCar.colour = {
    exterior : 'red',
    interior : {
        texture : 'leather',
        shade : 'cream'
    }
  }
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log(aCar.registration.year + '-' + aCar.registration.countyCode + '-' + aCar.registration.number)
  console.log(`It is a ${aCar.colour.exterior} car, ${aCar.mileage} mileage, with ${aCar.colour.interior.texture} interior...`)
  console.log('First owner : ' + aCar.previous_owners[0].name )

  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
} 

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name) ;
} 

for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}