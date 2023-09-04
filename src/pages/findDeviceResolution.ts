export const findLeastResolution = (
  resolutions: Array<[number, number]>,
  desiredResolution: number
): [number, number] => {
  // Spec says that the images 'should' all be square; remove any that are not, just in case.
  const squareRes = resolutions.filter(([width, height]) => width === height);
  // Sort by width, in case they are not yet sorted.
  const sortedByDistance = squareRes.sort(([widthA], [widthB]): number => {
    const distanceA = Math.abs(desiredResolution - widthA);
    const distanceB = Math.abs(desiredResolution - widthB);
    // sort a before b if a is closer to desired resolution than b
    if (distanceA < distanceB) {
      return -1;
    }
    // sort a after b if a is farther from desired resolution than b
    if (distanceA > distanceB) {
      return 1;
    }
    // leave them in order if they are the same
    return 0;
  });
  // The desired resolution is the smallest possible (for efficient bandwidth),
  // which is either slightly bigger or equal to the requested resolution (for image quality).
  // (Slightly bigger resolutions will be shrunk down well. Smaller resolutions will be potentially grainy.)
  const onlyEqualOrMore = sortedByDistance.filter(([width]) => width >= desiredResolution);
  // Send the smallest resolution set if available. If nothing was equal to or bigger than the desired resolution,
  // send the biggest one available. (For example, if we want 25 pixels and we have resolutions of 10 and 19 px, use 19.)
  if (onlyEqualOrMore.length > 0) {
    return onlyEqualOrMore[0];
  }
  const sortedBiggestToSmallest = squareRes.sort(([widthA], [widthB]): number => {
    // sort a before b if a is bigger than b
    if (widthA > widthB) {
      return -1;
    }
    // sort a after b if a is smaller than b
    if (widthA < widthB) {
      return 1;
    }
    // leave them in order if they are the same
    return 0;
  });
  return sortedBiggestToSmallest[0];
};
