export interface ProductTblData {
  id: string;
  line: string;
  description: string;
  image: {
    iconID: string;
    resolution: [number, number] | null;
  };
}

// Animation settings used elsewhere in Element.animate
export const fadeAway = [{ opacity: 1 }, { opacity: 0 }];
export const effectTiming: EffectTiming = {
  duration: 800,
  easing: 'ease-in-out',
  fill: 'forwards'
};
