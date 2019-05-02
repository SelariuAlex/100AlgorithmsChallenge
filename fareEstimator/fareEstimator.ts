function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  let estimate = [];

  for (let i = 0; i < cost_per_minute.length; i++) {
    estimate.push(
      (
        ride_time * cost_per_minute[i] +
        ride_distance * cost_per_mile[i]
      ).toFixed(1)
    );
  }

  return estimate;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

// ride_time * cost_per_minut + ride_distance * cost_per_miel;
