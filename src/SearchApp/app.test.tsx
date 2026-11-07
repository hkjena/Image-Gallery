import { AxiosHeaders } from "axios";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "./app";
import unsplash from "../APIs/unsplash";
import type { UnsplashPhoto } from "../APIs/types";

vi.mock("../APIs/unsplash", () => ({
  default: {
    defaults: {
      adapter: undefined,
    },
    get: vi.fn(),
  },
}));

const mockGet = vi.mocked(unsplash.get);

const createPhoto = (id: string, description = id): UnsplashPhoto => ({
  id,
  urls: { regular: `https://images.example/${id}.jpg` },
  alt_description: description,
  likes: 1,
  links: { download: `https://images.example/${id}/download` },
});

const createResponse = (data: unknown) => ({
  data,
  status: 200,
  statusText: "OK",
  headers: new AxiosHeaders(),
  config: { headers: new AxiosHeaders() },
});

const showInitialPhotos = () => {
  mockGet.mockResolvedValueOnce(
    createResponse([createPhoto("initial", "Initial photo")]),
  );
};

const submitSearch = (term: string) => {
  const input = screen.getByRole("searchbox");
  fireEvent.change(input, { target: { value: term } });
  fireEvent.click(screen.getByRole("button", { name: "Search" }));
};

beforeEach(() => {
  mockGet.mockReset();
});

afterEach(() => {
  cleanup();
});

describe("photo search", () => {
  it("shows matching photos after a successful search", async () => {
    showInitialPhotos();
    mockGet.mockResolvedValueOnce(
      createResponse({
        results: [createPhoto("searched", "Searched photo")],
      }),
    );

    render(<App />);
    expect(await screen.findByAltText("Initial photo")).toBeTruthy();

    submitSearch(" birds ");

    expect(await screen.findByAltText("Searched photo")).toBeTruthy();
    expect(mockGet).toHaveBeenLastCalledWith("/search/photos", {
      params: { query: "birds", per_page: 30 },
    });
  });

  it("shows the empty-results message when a search has no matches", async () => {
    showInitialPhotos();
    mockGet.mockResolvedValueOnce(createResponse({ results: [] }));

    render(<App />);
    expect(await screen.findByAltText("Initial photo")).toBeTruthy();

    submitSearch("no matches");

    expect(await screen.findByText("No Image Found...")).toBeTruthy();
  });

  it("shows a search error and restores the search button after failure", async () => {
    showInitialPhotos();
    mockGet.mockRejectedValueOnce(new Error("Service unavailable"));

    render(<App />);
    expect(await screen.findByAltText("Initial photo")).toBeTruthy();

    submitSearch("birds");

    expect(
      await screen.findByText("Unable to load photos: Service unavailable"),
    ).toBeTruthy();
    expect(await screen.findByRole("button", { name: "Search" })).toBeTruthy();
    expect(screen.queryByRole("status")).toBeNull();
  });

  it("shows an error when the initial photo request fails", async () => {
    mockGet.mockRejectedValueOnce(new Error("Network unavailable"));

    render(<App />);

    expect(
      await screen.findByText("Unable to load photos: Network unavailable"),
    ).toBeTruthy();
  });
});
