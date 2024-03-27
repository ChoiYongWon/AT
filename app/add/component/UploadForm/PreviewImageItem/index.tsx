import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import Image from "next/image";

import ImageAddButton from "../../../../../public/images/ImageAddButton.svg";
import { forwardRef, useEffect, useRef } from "react";
import { ImageStyle, PreviewImageItemStyle } from "../PreviewImage/style.css";
import { DraggableStyle, DraggableWrapperStyle } from "./style.css";

type Props = {
  // children: any;
  previewImageUrl: any;
  removePreviewImage: any;
};

const PreviewImageItem = (
  { previewImageUrl, removePreviewImage }: Props,
  ref: any
) => {
  const isDragging = useRef(false);
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
      key={previewImageUrl}
      value={previewImageUrl}
      drag="x"
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
    >
      <Image
        src={previewImageUrl}
        alt={previewImageUrl}
        width={100}
        height={100}
        draggable={false}
        className={ImageStyle}
        onClick={() => {
          if (!isDragging.current) {
            // const arr = [...previewImage];
            // removePreviewImage(arr, url);
            // setPreviewImage(arr);
            removePreviewImage();
          }

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
