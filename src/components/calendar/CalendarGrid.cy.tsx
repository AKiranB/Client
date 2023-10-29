import {
  createCalendarDays,
  getDaysInMonthUTC,
} from "../../utils/calendar/calendar";
import CalendarGrid from "./CalendarGrid";

describe("CalenderGrid", () => {
  const days = createCalendarDays(11, 2023, getDaysInMonthUTC);

  it("should render a grid of CalendarCells", () => {
    cy.mount(<CalendarGrid calendarDays={days} />);
    cy.get('[data-test-id="calender-grid"]')
      .children()
      .should("have.length", 30);
  });
});
