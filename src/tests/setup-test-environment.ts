import { vi, afterEach } from "vitest";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

// Clean up after each test
afterEach(() => {
  cleanup();
  vi.restoreAllMocks(); // Reset mocks between tests
});

// Type-safe mock for fetch
global.fetch = vi.fn((input: RequestInfo | URL) =>
  Promise.resolve({
    json: () => Promise.resolve({ mocked: true }),
    ok: true,
    status: 200,
    statusText: "OK",
    headers: new Headers(),
    redirected: false,
    type: "basic" as const,
    url: typeof input === "string" ? input : input.toString(),
    clone: () => Response.prototype.clone.call({} as Response),
    body: null,
    bodyUsed: false,
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
    text: () => Promise.resolve(""),
  } as Response),
);

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Legacy listener
    removeListener: vi.fn(), // Legacy listener
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Suppress console warnings/errors (optional)
vi.spyOn(console, "warn").mockImplementation(() => {});
vi.spyOn(console, "error").mockImplementation(() => {});
