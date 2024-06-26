import { useState, type ReactNode, useEffect, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";

export interface IWindow {
  windowTitle: string;
  handleCloseWindow: (windowTitle: string | null) => void;
  queuePosition?: number | null;
  zIndex: number;
  children?: ReactNode;
  Icon?: ReactNode;
}

const Window = ({
  children,
  windowTitle,
  queuePosition,
  Icon,
  zIndex,
  handleCloseWindow,
}: IWindow) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [size, setSize] = useState({ width: 800, height: 500 });
  const [position, setPosition] = useState({
    x: 150 + (queuePosition ?? 0) * 25,
    y: 25 + (queuePosition ?? 0) * 25,
  });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const isShow = true;

  const onMouseDownDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [position.x, position.y],
  );

  const onMouseDownResize = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsResizing(true);
      e.stopPropagation(); // Prevent drag logic from triggering
    },
    [],
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      } else if (isResizing) {
        setSize(() => ({
          width: Math.max(100, e.clientX - position.x),
          height: Math.max(50, e.clientY - position.y),
        }));
      }
    },
    [isDragging, isResizing, dragStart, position.x, position.y],
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  // Attach the mouse move and mouse up event listeners to the window
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    isShow && (
      <>
        <div
          style={{
            width: size.width,
            height: size.height,
            position: "absolute",
            left: position.x,
            top: position.y,
            zIndex: zIndex,
          }}
          className={
            "window hidden rounded-lg bg-white/40 backdrop-blur-xl dark:bg-black/60 sm:block"
          }
          onMouseDown={onMouseDownDrag}
        >
          <div
            style={{
              width: "100%",
              cursor: "move",
            }}
            className="flex h-8 items-center justify-between rounded-t-lg bg-sky-500 p-1 backdrop-blur-lg"
          >
            {Icon}
            <h2 className="text-white">{windowTitle}</h2>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white hover:opacity-80">
              <button onClick={() => handleCloseWindow(windowTitle)}>
                <AiOutlineClose></AiOutlineClose>
              </button>
            </div>
          </div>
          <div className="window h-[90%] overflow-scroll">{children}</div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              cursor: "nwse-resize",
              width: "20px",
              height: "20px",
            }}
            onMouseDown={onMouseDownResize}
          />
        </div>

        {/* For sm and below screen sizes */}
        <div className="window absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-white/40 backdrop-blur-xl dark:bg-black/60 sm:hidden">
          <div className="flex h-8 items-center justify-between rounded-t-lg bg-sky-500 p-1 backdrop-blur-lg">
            {Icon}
            <h2 className="text-white">{windowTitle}</h2>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white hover:opacity-80">
              <button onClick={() => handleCloseWindow(windowTitle)}>
                <AiOutlineClose></AiOutlineClose>
              </button>
            </div>
          </div>
          <div className="h-[92.5%] overflow-scroll p-4">{children}</div>
        </div>
      </>
    )
  );
};

export default Window;
