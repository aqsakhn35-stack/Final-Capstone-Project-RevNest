import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "../context/FavoritesContext";

beforeEach(() => localStorage.clear());

describe("Favorites", () => {
  it("adds and removes a favorite", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper: FavoritesProvider });

    act(() => result.current.toggleFavorite(1));
    expect(result.current.isFavorite(1)).toBe(true);

    act(() => result.current.toggleFavorite(1));
    expect(result.current.isFavorite(1)).toBe(false);
  });
});