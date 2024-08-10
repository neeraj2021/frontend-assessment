import { FrameComponentProps } from "../constants/explore";
import SelectButton from "./SelectButton";

const FrameComponent = (props: FrameComponentProps) => {
  return (
    <div className="pt-4">
      <div className="py-2">
        <img src={props.imageSrc} alt="Not found"></img>
      </div>

      <div className="pt-2 pb-4">
        <div className="flex flex-row items-center">
          <div className="text-black text-sm font-normal flex-1">
            {props.name}, {props.year}
          </div>
          <div>
            <div className={`w-3 h-3 rounded-full ${props.dotColor}`} />
          </div>
        </div>
        <div className="text-black/80 text-xs font-normal leading-none">
          {props.designation}
        </div>
      </div>

      <SelectButton
        title="select"
        type="filled"
        className="rounded-full px-1 py-1 text-xs font-normal"
      />
    </div>
  );
};

export default FrameComponent;
