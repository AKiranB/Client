import CalendarCell from "./CalendarCell";
import { useState } from "react";

describe("CalendarCell", () => {
  it("should render", () => {
    const dayOfTheWeek = "Mon";
    const dayOfTheMonth = "1";
    cy.mount(
      <CalendarCell dayOfTheWeek={dayOfTheWeek} dayOfTheMonth={dayOfTheMonth} />
    );
    cy.get("text").should("have.text", `${dayOfTheWeek} ${dayOfTheMonth}`);
  });
});
