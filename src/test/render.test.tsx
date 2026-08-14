/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import Index from "../pages/Index";

// Mock React Three Fiber and Drei to prevent WebGL/JSDOM crashes
vi.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: any) => <div data-testid="canvas">{children}</div>,
  useFrame: vi.fn(),
  useThree: () => ({ camera: {}, viewport: {} }),
}));

vi.mock("@react-three/drei", () => ({
  Html: ({ children }: any) => <div>{children}</div>,
  OrbitControls: () => null,
  Sparkles: () => null,
  Stars: () => null,
  Float: ({ children }: any) => <div>{children}</div>,
  Points: () => null,
  PointMaterial: () => null,
  MeshDistortMaterial: () => null,
  TorusKnot: () => null,
}));

// Mock GSAP to prevent asynchronous tickers and timeouts causing uncaught exceptions in JSDOM
vi.mock("gsap", () => {
  const gsapMock = {
    registerPlugin: vi.fn(),
    from: vi.fn(),
    to: vi.fn(),
    context: vi.fn(() => ({ revert: vi.fn() })),
    utils: {
      toArray: vi.fn(() => []),
    },
    ticker: {
      add: vi.fn(),
      remove: vi.fn(),
      lagSmoothing: vi.fn(),
    },
  };
  return {
    gsap: gsapMock,
    default: gsapMock,
  };
});

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: vi.fn(),
}));

// Mock IntersectionObserver for JSDOM
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock ResizeObserver for JSDOM
const mockResizeObserver = vi.fn();
mockResizeObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.ResizeObserver = mockResizeObserver;

// Mock requestAnimationFrame and cancelAnimationFrame for GSAP in JSDOM
global.requestAnimationFrame = (callback) => setTimeout(callback, 0) as any;
global.cancelAnimationFrame = (id) => clearTimeout(id as any);
window.requestAnimationFrame = global.requestAnimationFrame;
window.cancelAnimationFrame = global.cancelAnimationFrame;

describe("Index Page Rendering Test", () => {
  it("renders without crashing", () => {
    const { container } = render(<Index />);
    expect(container).toBeTruthy();
  });
});
