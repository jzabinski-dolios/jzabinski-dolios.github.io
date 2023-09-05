/**
 * Finds an ideal resolution for display, given a resolution desired.
 * @param resolutions a tuple of available resolutions, in [width,height] order.
 * @param desiredResolution the desired resolution
 * @returns The exact resolution requested if available. If only larger resolutions are available,
 * the smallest of that larger set is returned. If only smaller resolutions are available, the largest
 * of that smaller set is returned.
 */
export const findLeastResolution = (
  resolutions: Array<[number, number]>,
  desiredResolution: number
): [number, number] => {
  // Spec says that the images 'should' all be square; remove any that are not, just in case.
  const squareRes = resolutions.filter(([width, height]) => width === height);
  // Sort by distance from the ideal. For example, if 10px is desired, then 11 will be sorted above than 12.
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
  const onlyEqualOrMore = sortedByDistance.filter(([width]) => width >= desiredResolution);
  // If only bigger or equal resolutions are available, send the top resolution.
  // This resolves equal resolutions, and bigger resolutions.
  if (onlyEqualOrMore.length > 0) {
    return onlyEqualOrMore[0];
  }
  // If only smaller resolutions available, find the biggest possible.
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
