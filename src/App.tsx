import React from "react";
import FrameComponent from "./components/FrameComponent";
import Header from "./components/Header";
import { explore } from "./constants/explore";

const App: React.FC = () => {
  return (
    <div className="mx-auto container px-6 py-4 max-w-5xl">
      <Header />

      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {explore.map((item) => (
          <FrameComponent key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
