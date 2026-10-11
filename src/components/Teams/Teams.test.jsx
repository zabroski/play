import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Teams from "./Teams";

test("Summer appears first with her biography and real childhood photo", () => {
  render(<Teams />);

  expect(screen.getAllByRole("heading", { level: 3 }).slice(0, 5).map((heading) => heading.textContent)).toEqual([
    "Summer Sheridan-Zabre",
    "Julia Sawinski",
    "Mallory Winick",
    "Cordelia Johnson",
    "Liana",
  ]);
  expect(screen.getByText(/over 15 years working as a school social worker/)).toBeTruthy();
  expect(screen.getByText(/American Red Cross September 11 Recovery Program/)).toBeTruthy();
  expect(screen.getByText(/trying to get fellow park dwellers to high five me/)).toBeTruthy();
  expect(screen.getByAltText("Summer Sheridan-Zabre as a child").getAttribute("src")).toBe("hero-summer.jpg");
  expect(screen.getByRole("heading", { name: "Julia Sawinski" })).toBeTruthy();
  expect(screen.getByRole("heading", { name: "Mallory Winick" })).toBeTruthy();
  expect(screen.getByAltText("Julia Sawinski as a child").getAttribute("src")).toBe("julia-childhood-cropped.png");
  expect(screen.getByAltText("Mallory Winick as a child").getAttribute("src")).toBe("mallory-childhood.png");
  expect(screen.queryByAltText("Generic child portrait — AI-generated placeholder")).toBeNull();
  expect(screen.getByText("BA, M.Ed., LCSW")).toBeTruthy();
  expect(screen.getByText(/degree in Art History from the University of Chicago/)).toBeTruthy();
  expect(screen.getByText(/Master’s degree in Social Work from New York University/)).toBeTruthy();
  expect(screen.getByAltText("Cordelia Johnson, BA, M.Ed., LCSW").getAttribute("src")).toBe("cordelia-current.png");
  expect(screen.getByAltText("Liana as a child").getAttribute("src")).toBe("liana-childhood-cropped.png");
  expect(screen.getByText(/transition from high school to college/)).toBeTruthy();
  expect(screen.getByText(/Growing up, Liana’s nickname was LSM/)).toBeTruthy();
});

test("Escape dismisses keyboard focus from Summer’s photo panel", () => {
  render(<Teams />);

  const panel = screen.getByRole("group", { name: "Summer Sheridan-Zabre: focus to view photo" });
  panel.focus();
  expect(document.activeElement).toBe(panel);
  fireEvent.keyDown(panel, { key: "Escape" });

  expect(document.activeElement).not.toBe(panel);
});

test("the animated play card sits immediately after Liana in the team grid", () => {
  render(<Teams />);
  const lianaCard = screen.getByRole("heading", { name: "Liana" }).closest("article");
  const playCard = screen.getByRole("article", { name: "Room to play. Space to grow." });
  expect(lianaCard.nextElementSibling).toBe(playCard);
  expect(playCard.querySelector('a').getAttribute('href')).toBe('#contact');
});
