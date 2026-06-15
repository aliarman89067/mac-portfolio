import { useLayoutEffect, useRef, type ComponentType } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import useWindowStore from "../../store/window";
import type { WINDOW_CONFIG } from "#constants";
import clsx from "clsx";

const WindowWrapper = (Component: ComponentType, windowKey: string) => {
  const Wrapped = () => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMaximized } =
      windows[windowKey as keyof typeof WINDOW_CONFIG];
    const ref = useRef<HTMLElement>(null);
    const savedTransform = useRef<{
      x: number;
      y: number;
      width: number;
      height: number;
    } | null>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          yoyo: true,
        },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isMaximized) {
        const rect = el.getBoundingClientRect();
        const currentX = gsap.getProperty(el, "x") as number;
        const currentY = gsap.getProperty(el, "y") as number;
        const originX = rect.left - currentX;
        const originY = rect.top - currentY;

        // Save position AND size before maximizing
        savedTransform.current = {
          x: currentX,
          y: currentY,
          width: rect.width,
          height: rect.height,
        };

        el.style.maxWidth = "none";
        el.style.maxHeight = "none";

        gsap.to(el, {
          x: -originX, // move to left:0
          y: -originY, // move to top:0
          width: window.innerWidth,
          height: window.innerHeight,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => Draggable.get(el)?.update(),
        });
      } else {
        if (!savedTransform.current) return;

        gsap.to(el, {
          x: savedTransform.current.x,
          y: savedTransform.current.y,
          width: savedTransform.current.width,
          height: savedTransform.current.height,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            Draggable.get(el)?.update();
            savedTransform.current = null;
            el.style.maxWidth = "";
            el.style.maxHeight = "";
          },
        });
      }
    }, [isMaximized]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={clsx("absolute")}
      >
        <Component />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
