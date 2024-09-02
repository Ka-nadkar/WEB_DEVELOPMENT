// Function to approximate Pi using Monte Carlo simulation
const approximatePi = (numPoints) => {
    let insideCircle = 0;
    // Iterate to generate random points and count those inside the unit circle
    for (let i = 0; i < numPoints; i++) {
      // Generate random x and y coordinates in the range [0, 1)
      const x = Math.random();
      const y = Math.random();
  // Check if the point (x, y) is inside the unit circle
      if (x * x + y * y <= 1) {
        insideCircle++;
      }
    }
  // Calculate the ratio of points inside the circle to total points
    const ratio = insideCircle / numPoints;
    // Approximate Pi using the Monte Carlo method
    const piApprox = 4 * ratio;
  return piApprox;
  };
  // Number of points to use in the simulation (higher numbers give more accurate results)
  const numPoints = 1000000;
   // Perform the approximation
  const result = approximatePi(numPoints);
   // Output the result
  console.log(`Approximation of Pi using Monte Carlo Simulation:`);
  console.log(`Number of points: ${numPoints}`);
  console.log(`Approximated Pi: ${result}`);
  
  