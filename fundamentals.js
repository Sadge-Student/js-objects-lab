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