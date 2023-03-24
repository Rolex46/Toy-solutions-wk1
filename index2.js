// this is the solution for challenge 2 which detects the speed of a car
// function that takes speed as input
/*
Speed Limit = 70km/h
5 -> 1 point
Math.floor(1.3)
12 point -> suspended
*/

function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerPoint= 5;

  if (speed <= speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const Demeritpoints = Math.floor((speed - speedLimit) / kmPerPoint);
  if (Demeritpoints >= 12) console.log("License suspended");
  else console.log("Points", Demeritpoints);
}

speedDetector(90);