import Calendar from "./Calendar";
import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";

describe("Calendar", () => {
  const { calendarDays, calendarMonth } = useCreateCalendarDays();
  const month = 10;

  it("should render the calendar", () => {
    cy.mount(
      <Calendar
        calendarDays={calendarDays}
        calendarMonth={calendarMonth}
        currentMonth={month}
      />
    );
  });
  it("should render the CalendarGrid correctly with the correct number of days  ", () => {
    cy.mount(
      <Calendar
        calendarDays={calendarDays}
        calendarMonth={calendarMonth}
        currentMonth={month}
      />
    );
    it("should render the month title", () => {
      expect(cy.get('[data-test-id="month-title"]')).to.exist;
    });
    expect(cy.get('[data-test-id="calender-grid"]')).to.exist;
    cy.get('[data-test-id="calender-grid"]')
      .children()
      .should("have.length", 31);
  });
});
