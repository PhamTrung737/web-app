import { RetweetOutlined, VerticalAlignBottomOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useRef } from "react";

type ImageOverlayCollageProps = {
  backgroundImage: string; // URL của ảnh nền
  images: string[]; // Danh sách URL của ảnh
  canvasWidth: number; // Chiều rộng canvas
  canvasHeight: number; // Chiều cao canvas
  onDownload: () => void; 
  onCustom: () => void;
};

const ImageOverlayCollage: React.FC<ImageOverlayCollageProps> = ({
  backgroundImage,
  images,
  canvasWidth,
  canvasHeight,
  onCustom,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return; // Kiểm tra nếu canvas không phải null

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Kiểm tra nếu ctx không phải null

    // Xóa canvas trước khi vẽ
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hàm tải ảnh từ URL
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
      });
    };

    // Tải ảnh nền và ảnh chồng
    const loadImages = async () => {
      const backgroundImg = await loadImage(backgroundImage);

      // Vẽ ảnh nền
      ctx.drawImage(backgroundImg, 0, 0, canvasWidth, canvasHeight);

      // Đặt các vị trí và kích thước cho từng ảnh
      const positions = [
        { x: 150, y: 0, width: 250, height: 300 }, // Ảnh 1
        { x: 120, y: -33, width: 330, height: 400 }, // Ảnh 2
        { x: 160, y: 18, width: 250, height: 230 }, // Ảnh 3
        { x: 130, y: -10, width: 300, height: 350 }, // Ảnh 4
        { x: 150, y: 25, width: 220, height: 250 }, // Ảnh 5
        { x: 120, y: 0, width: 330, height: 320 }, // Ảnh 6
        { x: 140, y: 75, width: 270, height: 200 },
        { x: 180, y: -35, width: 300, height: 400 },
      ];

      // Tải tất cả các ảnh chồng lên
      const loadedImages = await Promise.all(images.map((src) => loadImage(src)));

      // Vẽ từng ảnh lên canvas
      loadedImages.forEach((img, index) => {
        const { x, y, width, height } = positions[index];
        ctx.drawImage(img, x, y, width, height); // Vẽ ảnh chồng lên
      });
    };

    // Gọi hàm loadImages để tải và vẽ ảnh
    loadImages();
  }, [backgroundImage, images, canvasWidth, canvasHeight]);

  // Hàm để tải ảnh xuống
  const handleDownload = () => {
    if (canvasRef.current) {
      const dataURL = canvasRef.current.toDataURL("image/png"); // Lấy dữ liệu ảnh từ canvas
      const link = document.createElement("a");
      link.href = dataURL; // Đặt URL dữ liệu vào link
      link.download = "collage.png"; // Tên file khi tải xuống
      link.click(); // Mô phỏng click để tải xuống
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} style={{ border: "1px solid black", borderRadius: 15 }} />
      <div className="flex justify-around">
        <Button onClick={onCustom} className="text-lg font-[500] p-4">
          <RetweetOutlined /> Random
        </Button>
        <Button className="text-lg p-4 font-[500]" onClick={handleDownload}>
          <VerticalAlignBottomOutlined /> Download
        </Button>
      </div>
    </div>
  );
};

export default ImageOverlayCollage;
