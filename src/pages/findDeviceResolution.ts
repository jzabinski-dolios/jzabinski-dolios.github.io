export const findLeastResolution = (
  resolutions: Array<[number, number]>,
  desiredResolution: number
): [number, number] => {
  // Spec says that the images 'should' all be square; remove any that are not, just in case.
  const squareRes = resolutions.filter(([width, height]) => width === height);
  // Sort by width, in case they are not yet sorted.
  const sorted = squareRes.sort(
    ([widthA], [widthB]) =>
      Math.abs(desiredResolution - widthA) - Math.abs(desiredResolution - widthB)
  );
  // The desired resolution is the smallest possible (for efficient bandwidth),
  // which is either slightly bigger or equal to the requested resolution (for image quality).
  // (Slightly bigger resolutions will be shrunk down well. Smaller resolutions will be potentially grainy.)
  const onlyEqualOrMore = sorted.filter(([width]) => width >= desiredResolution);
  // Send the smallest resolution set if available. If nothing was equal to or bigger than the desired resolution,
  // send the biggest one available. (For example, if we want 25 pixels and we have resolutions of 10 and 19 px, use 19.)
  if (onlyEqualOrMore.length > 0) {
    return onlyEqualOrMore[0];
  }
  return sorted[sorted.length - 1];
};
