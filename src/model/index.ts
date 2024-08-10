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
