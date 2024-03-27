import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import Image from "next/image";
import {
  ImageAddButtonTitleStyle,
  ImageAddButtonWrapperStyle,
  ImageAddWrapper,
  ImageContainerStyle,
  ImageStyle,
  PreviewImageItemStyle,
} from "./style.css";
import ImageAddButton from "../../../../../public/images/ImageAddButton.svg";
import { useRef } from "react";

type Props = {
  // children: any;
  previewImage: any;
  setPreviewImage: any;
  removePreviewImage: any;
};

const PreviewImage = ({
  previewImage,
  setPreviewImage,
  removePreviewImage,
}: Props) => {
  const isDragging = useRef(false);

  return (
    <div className={ImageAddWrapper}>
      <input type="file" id="image-input" hidden />
      <label htmlFor="image-input" className={ImageAddButtonWrapperStyle}>
        <Image src={ImageAddButton} alt="+" />
        <div className={ImageAddButtonTitleStyle}>사진 찾기</div>
      </label>
      <Reorder.Group
        className={ImageContainerStyle}
        style={{ marginLeft: "10px" }}
        values={previewImage}
        onReorder={setPreviewImage}
        axis="x"
      >
        <AnimatePresence mode="popLayout">
          {previewImage.map((url: string) => {
            return (
              <Reorder.Item
                onDragStart={() => (isDragging.current = true)}
                onDragEnd={() =>
                  setTimeout(() => (isDragging.current = false), 1)
                }
                layout
                className={PreviewImageItemStyle}
                key={url}
                value={url}
                drag="x"
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring" }}
              >
                <Image
                  src={url}
                  alt={url}
                  width={100}
                  height={100}
                  draggable={false}
                  className={ImageStyle}
                  onClick={() => {
                    if (!isDragging.current) {
                      const arr = [...previewImage];
                      removePreviewImage(arr, url);
                      setPreviewImage(arr);
                    }

                    // }
                  }}
                />
              </Reorder.Item>
            );
          })}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default PreviewImage;
