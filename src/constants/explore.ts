import ArtWork1 from "../assets/artwork-1@2x.png";
import ArtWork2 from "../assets/artwork-2@2x.png";
import Artwork3 from "../assets/mask-group-oeuvre-3@2x.png";
import ArtWork4 from "../assets/artwork-4@2x.png";

export interface FrameComponentProps {
  id:number;
  name: string;
  year: number;
  imageSrc: string;
  designation: string;
  dotColor?: string;
}

export const explore: FrameComponentProps[] = [
  {
    id: 1,
    name: "Somnia",
    year: 2010,
    designation: "Painting",
    imageSrc: ArtWork1,
    dotColor: 'bg-yellow-500'
  },
  {
    id: 2,
    name: "Solar Serenity",
    year: 2022,
    designation: "Drawing",
    imageSrc: ArtWork2,
    dotColor: 'bg-red-600'
  },
  {
    id: 3,
    name: "The Shipwrecked",
    year: 2013,
    designation: "Video",
    imageSrc: Artwork3,
    dotColor: 'bg-cyan-400'
  },
  {
    id: 4,
    name: "Mirage",
    year: 2022,
    designation: "Scuplture",
    imageSrc: ArtWork4,
    dotColor: 'bg-green-500'

  },
  {
    id: 5,
    name: "Somnia",
    year: 2010,
    designation: "Painting",
    imageSrc: ArtWork1,
    dotColor: 'bg-yellow-500'
  },
  {
    id: 6,
    name: "Solar Serenity",
    year: 2022,
    designation: "Drawing",
    imageSrc: ArtWork2,
    dotColor: 'bg-red-600'
  },
  {
    id: 7,
    name: "The Shipwrecked",
    year: 2013,
    designation: "Video",
    imageSrc: Artwork3,
    dotColor: 'bg-cyan-400'
  },
  {
    id: 8,
    name: "Mirage",
    year: 2022,
    designation: "Scuplture",
    imageSrc: ArtWork4,
    dotColor: 'bg-green-500'

  },
];
