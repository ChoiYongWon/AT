import { Reorder, useDragControls, motion } from "framer-motion";
import Image from "next/image";

import { forwardRef } from "react";

import {
  DraggableStyle,
  DraggableWrapperStyle,
  ImageStyle,
  ImageWrapperStyle,
  PreviewImageItemStyle,
} from "./style.css";
import { ImageType } from "../../../recoil";

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
    >
      <motion.div className={ImageWrapperStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
        {
          image.isNew ? (
            <Image
              // unoptimized
              src={`${image.previewUrl}`}
              alt={image.name}
              width={100}
              height={100}
              draggable={false}
              className={ImageStyle}
              onClick={() => {
                removeImage();
              }}
            />
          ) : (
            <Image
              unoptimized
              src={`https://images.weserv.nl/?url=${image.previewUrl}&w=150&h=150&output=webp&q=80`}
              alt={image.name}
              width={100}
              height={100}
              draggable={false}
              className={ImageStyle}
              onClick={() => {
                removeImage();
              }}
            />
          )
        }
      </motion.div>
      
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
