"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type SignaturePadHandle = {
  isEmpty: () => boolean;
  clear: () => void;
  toDataURL: () => string;
};

type SignaturePadProps = {
  className?: string;
  onChange?: (isEmpty: boolean) => void;
};

const SignaturePad = forwardRef<SignaturePadHandle, SignaturePadProps>(
  function SignaturePad({ className = "", onChange }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawing = useRef(false);
    const emptyRef = useRef(true);
    const [, setTick] = useState(0);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#111";
    }, []);

    const setIsEmpty = (next: boolean) => {
      emptyRef.current = next;
      onChange?.(next);
      setTick((n) => n + 1);
    };

    useImperativeHandle(ref, () => ({
      isEmpty: () => emptyRef.current,
      clear: () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setIsEmpty(true);
      },
      toDataURL: () => canvasRef.current?.toDataURL("image/png") ?? "",
    }));

    const getPoint = (e: React.PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current!;
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const start = (e: React.PointerEvent<HTMLCanvasElement>) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;
      drawing.current = true;
      const { x, y } = getPoint(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
      canvasRef.current?.setPointerCapture(e.pointerId);
    };

    const move = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drawing.current) return;
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;
      const { x, y } = getPoint(e);
      ctx.lineTo(x, y);
      ctx.stroke();
      if (emptyRef.current) setIsEmpty(false);
    };

    const end = () => {
      drawing.current = false;
    };

    return (
      <div className={className}>
        <canvas
          ref={canvasRef}
          className="w-full h-[150px] rounded-lg border border-gray-200 bg-white touch-none"
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerLeave={end}
        />
        <button
          type="button"
          onClick={() => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            setIsEmpty(true);
          }}
          className="mt-2 text-sm text-[#3491E8] hover:underline cursor-pointer"
        >
          Clear signature
        </button>
      </div>
    );
  }
);

export default SignaturePad;
