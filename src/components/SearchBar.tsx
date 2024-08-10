import searchLine from "../assets/claritysearchline.svg";

interface SearchBarProps {
  watermark: string;
  className?: string;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <div
      className={`flex flex-row font-medium border-[rgba(0,0,0,0.35)] border-[1.6px] justify-start items-center pt-[0.125rem] px-[0.4rem] py-[0.1rem] relative z-[1] text-left text-[0.5rem] text-[rgba(0,0,0,0.35)] ${props.className}`}
    >
      <div className="w-[8.25rem] relative font-medium flex items-center z-[2] flex-1">
        {props.watermark ?? "Search"}
      </div>
      <img
        className="h-[1rem] w-[1.019rem] relative overflow-hidden shrink-0 min-h-[1rem]"
        loading="lazy"
        alt=""
        src={searchLine}
      />
    </div>
  );
};

export default SearchBar;
