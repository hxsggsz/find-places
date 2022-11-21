interface Pins {
  id: string;
  name: string;
  image: string;
  latitude: number;
  longitude: number;
  description: string;
}

export interface MapProps {
  pins: Pins[];
}
