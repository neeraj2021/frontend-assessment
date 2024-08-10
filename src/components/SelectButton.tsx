interface SelectButtonProps {
  title: string;
  type?: "filled" | "outlined";
  className?: string;
}

const SelectButton = (props: SelectButtonProps) => {
  return (
    <div className="cursor-pointer [border:none] inline-block">
      <div
        className={`border-[#000] text-xs border-[0.5px] border-solid box-border ${
          props.type == "filled" ? "bg-black text-white" : ""
        } ${props.className}`}
      >
        <p className="px-4">{props.title}</p>
      </div>
    </div>
  );
};

export default SelectButton;
