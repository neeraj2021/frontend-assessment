export enum Designation {
  Painting = "Painting",
  Drawing = "Drawing",
  Video = "Video",
  Sculpture = "Sculpture",
}

export interface FrameComponentProps {
  id: number;
  name: string;
  year: number;
  imageSrc: string;
  designation: Designation;
  dotColor?: string;
}

export interface Navbar {
  id: number;
  title: string;
  isSelect: boolean;
  options: NavbarOption[];
}

export interface NavbarOption {
  id: number;
  title: string;
}

export interface SearchBarProps {
  watermark: string;
  className?: string;
}

export interface SelectButtonProps {
  title: string;
  type?: "filled" | "outlined";
  className?: string;
}
