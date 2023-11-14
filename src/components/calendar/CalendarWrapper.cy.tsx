import useCreateCalendarDays from "../../hooks/useCreateCalendarDays";
import CalendarWrapper from "./CalendarWrapper";

describe("CalendarWrapper", () => {
  const { calendarDays, calendarMonth } = useCreateCalendarDays();
  const days = calendarDays.length;
  it("Should render the CalendarWrapper", () => {
    cy.mount(<CalendarWrapper />);
    expect(cy.get('[data-test-id="calendar-wrapper"]')).to.exist;
  });
  it("Should change month when the next button is clicked", () => {
    cy.mount(<CalendarWrapper />);
    cy.get('[data-test-id="next-button"]').click();
    cy.get('[data-test-id="calender-grid"]')
      .children()
      .should("have.length", days);
    cy.get('[data-test-id="month-title"]').should("contain", calendarMonth);
  });
  //   it("Should change month when the previous button is clicked", () => {
  //     cy.mount(
  //       <Calendar
  //         calendarDays={calendarDays}
  //         calendarMonth={calendarMonth}
  //         currentMonth={month}
  //       />
  //     );
  //     cy.get('[data-test-id="previous-button"]').click();
  //     cy.get('[data-test-id="calender-grid"]')
  //       .children()
  //       .should("have.length", 30);
  //     cy.get('[data-test-id="month-title"]').should("contain", "September");
  //   });
});
