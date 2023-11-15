import CalendarWrapper from "./CalendarWrapper";
import { getDaysInMonthUTC } from "../../utils/calendar/calendar";

describe("CalendarWrapper", () => {
  const currentMonth = new Date().getUTCMonth() + 1;
  const days = getDaysInMonthUTC(currentMonth, 2023);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  it("Should render the month title with the current month", () => {
    cy.mount(<CalendarWrapper />);
    cy.get('[data-test-id="month-title"]').should(
      "contain",
      month[currentMonth - 1]
    );
  });
  it("Should render the CalendarGrid with the correct number of days", () => {
    cy.mount(<CalendarWrapper />);
    cy.get('[data-test-id="calender-grid"]')
      .children()
      .should("have.length", days);
  });
  it("Should change month when the next button is clicked", () => {
    cy.mount(<CalendarWrapper />);
    cy.get('[data-test-id="next-month"]').click();
    cy.get('[data-test-id="calender-grid"]')
      .children()
      .should("have.length", getDaysInMonthUTC(currentMonth + 1, 2023));
    cy.get('[data-test-id="month-title"]').should(
      "contain",
      month[currentMonth]
    );
  });
  it("Should change month when the previous button is clicked", () => {
    cy.mount(<CalendarWrapper />);
    cy.get('[data-test-id="prev-month"]').click();
    cy.get('[data-test-id="calender-grid"]')
      .children()
      .should("have.length", getDaysInMonthUTC(currentMonth - 1, 2023));
    cy.get('[data-test-id="month-title"]').should(
      "contain",
      month[currentMonth - 2]
    );
  });
});
