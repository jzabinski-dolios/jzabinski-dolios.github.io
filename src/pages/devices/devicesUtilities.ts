export interface ProductTblData {
  id: string;
  line: string;
  description: string;
  image: {
    iconID: string;
    resolution: [number, number] | null;
  };
}
