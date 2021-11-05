const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//to be a voting building both capacity > 20 and the building must be a school or community centre.

const chooseStations = function (stations) {
  goodStations = [];
  for (building of stations) {
    if ((building[1] >= 20) && (building[2]==='school' || building[2] === 'community centre'))
    goodStations.push(building[0])};
  return goodStations;
}

console.log(chooseStations(stations));