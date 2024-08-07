import { ReactElement, cloneElement, memo, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  styleLoader?: string;
  children: ReactElement;
}
const ImageLoader = (props: IProps) => {
  const { children, styleLoader } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const ClonedChild = memo(() =>
    cloneElement(children, { onLoad: handleImageLoad })
  );

  return (
    <div className="relative">
      {!isImageLoaded && (
        <div className={twMerge("absolute bg-gray9c", styleLoader)}></div>
      )}
      <ClonedChild />
    </div>
  );
};

export default ImageLoader;
