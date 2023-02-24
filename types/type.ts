export interface Color {
  name: string;
  hex: string;
  rgba: string;
  color: string;
  borderColor: string;
}

export interface HeroItem {
  name: string;
  icon: string;
  description: string;
  path: string;
  video: string;
}

export interface PricePlan {
  name: string;
  unit: string;
  price: string;
  description: string;
  lifetime?: boolean;
  availables: number[];
  selected?: boolean;
  action: {
    name: string;
    function: () => void;
  };
}
