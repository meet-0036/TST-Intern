let johnteamAvg = (90 + 120 + 105) / 3;
let miketeamAvg = (155 + 95 + 120) / 3;
let maryteamAvg = (90 + 135 + 105) / 3;

console.log("John team avg score is : " + johnteamAvg);
console.log("Mike team avg score is : " + miketeamAvg);
console.log("Mary team avg score is : " + maryteamAvg);

if (johnteamAvg < miketeamAvg && miketeamAvg > maryteamAvg) {
  console.log("Mike's team is win.");
} else if (johnteamAvg > miketeamAvg && miketeamAvg < johnteamAvg) {
  console.log("john's team is win.");
} else if (maryteamAvg > johnteamAvg && miketeamAvg < maryteamAvg) {
  console.log("Mary's team is win.");
} else {
  console.log("There is a drow.");
}

// BONUS 1 & 2 WITH 3 ENITIES

/*

if (
  johnteamAvg < miketeamAvg &&
  miketeamAvg > maryteamAvg &&
  miketeamAvg >= 100
)
  console.log("Mike's team is win.");
else if (
  johnteamAvg > miketeamAvg &&
  miketeamAvg < johnteamAvg &&
  johnteamAvg >= 100
)
  console.log("john's team is win.");
else if (
  maryteamAvg > johnteamAvg &&
  miketeamAvg < maryteamAvg &&
  maryteamAvg >= 100
)
  console.log("Mary's team is win.");
else if (
  ((maryteamAvg === johnteamAvg) === maryteamAvg && maryteamAvg,
  miketeamAvg,
  johnteamAvg >= 100)
)
  console.log("There is a drow.");

else console.log("no one can win.");
*/
