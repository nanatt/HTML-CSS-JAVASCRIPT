/*
1-Search only over all of the ranger objects contained within the vehicle object, creatively using the existing numRangers property to do so. No need to look at the other properties in the vehicle.

2-Every ranger’s dayOff should be checked. If the dayOff matches the passed in day, the ranger’s object should be added to an array of objects, called offDuty, which will eventually be returned. If the dayOff does NOT match the day, add the ranger object to an array called onDuty.

3-In both cases, the existing ranger object should be removed from the vehicle, either because it’s property name will be renumbered OR because the ranger is off-duty.

4-The numRangers property should be adjusted correctly for the amount of rangers still on duty.

5-The rangers staying in the vehicle should be re-added to the vehicle, with property names rebuilt using the onDuty array, in the order that the rangers were added to that array. Their new ranger numbers should start with 1, as in the example above.

6-Finally, to test your might and consider you for a promotion, the rangers would like you to build the entire function using only bracket notation…no dot notation allowed on regular object properties. Any array methods you might use, however, are okay to use with dots as normal.

7-Then, after building the function, call it on vehicle3 and "Friday". The resulting array of objects should be stored in a variable called offToday.
*/
var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};
function relieveDuty(vehicle,day){
    var offDuty = [];
  var onDuty = [];
    for(var i = 0; i<vehicle.numRangers;i++){
        //if(day==vehicle["ranger"+(i+1)]["dayOff"]){
        if(vehicle["ranger"+(i+1)]["dayOff"]==day){
            offDuty.push(vehicle["ranger"+(i+1)]);
          delete vehicle["ranger"+(i+1)];
        } else {
            onDuty.push(vehicle["ranger"+(i+1)]);
          delete vehicle["ranger"+(i+1)];
        }
    }

  for(i=0;i<onDuty.length;i++){
    vehicle["ranger"+(i+1)]=onDuty[i];
  }
  vehicle.numRangers = onDuty.length;
  return offDuty;
} //;
var offToday; // = [];
offToday = relieveDuty(vehicle3,"Friday");