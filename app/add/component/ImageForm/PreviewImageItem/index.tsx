import { Reorder, useDragControls } from "framer-motion";
import Image from "next/image";

import { forwardRef } from "react";

import {
  DraggableStyle,
  DraggableWrapperStyle,
  ImageStyle,
  PreviewImageItemStyle,
} from "./style.css";
import { ImageType } from "@/app/add/recoil";

type Props = {
  // children: any;
  image: ImageType;
  removeImage: any;
};

const PreviewImageItem = (
  { image, removeImage }: Props,
  ref: any
) => {
  const dragControl = useDragControls();

  return (
    <Reorder.Item
      ref={ref}
      dragControls={dragControl}
      dragListener={false}
      //   onDragStart={() => (isDragging.current = true)}
      //   onDragEnd={() => setTimeout(() => (isDragging.current = false), 1)}
      //   layout
      className={PreviewImageItemStyle}
      key={image.name}
      value={image}
      drag="x"
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "just" }}
      {...{ whileTap: { scale: 0.96 } }}
    >

      <Image
        src={image.previewUrl}
        alt={image.name}
        width={100}
        height={100}
        draggable={false}
        className={ImageStyle}
        onClick={() => {
          removeImage();

          // }
        }}
      />
      <div
        className={DraggableWrapperStyle}
        onPointerDown={(e) => dragControl.start(e)}
        style={{ touchAction: "none" }}
      >
        <div className={DraggableStyle}></div>
      </div>
    </Reorder.Item>
  );
};

export default forwardRef(PreviewImageItem);
