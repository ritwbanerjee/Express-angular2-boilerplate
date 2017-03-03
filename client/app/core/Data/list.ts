export default class Data {
  static sendList(list) {

    if (list === 'A') {
      return ([{
          "name"  : "Hannah",
          "age"   : 31 
        }, {
          "name"  : "Jeremy",
          "age"   : 35
        }, {
          "name"  : "Mark",
          "age"   : 55 
        }, {
          "name"  : "Jesse",
          "age"   : 38
        }])
    } else {
      return ([{
          "name"  : "Ritesh",
          "age"   : 24 
        }, {
          "name"  : "Ritwik",
          "age"   : 26
        }, {
          "name"  : "Manish",
          "age"   : 24 
        }, {
          "name"  : "Ayush",
          "age"   : 24
        }]
      );
    }
  }
}