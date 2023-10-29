import { expect } from "@jest/globals";
import { getDaysInMonthUTC, createCalendarDays } from "./calendar";

describe("Day Helper Functions", () => {
  describe("getDaysInMonthUTC", () => {
    it("should return 29 for February 2020", () => {
      expect(getDaysInMonthUTC(2, 2020)).toBe(29);
    });

    it("should return 30 for April 2021", () => {
      expect(getDaysInMonthUTC(4, 2021)).toBe(30);
    });

    it("should return 31 for January 2021", () => {
      expect(getDaysInMonthUTC(1, 2021)).toBe(31);
    });
  });

  describe("createCalendarDays", () => {
    it("should create an array of days for a given month and year", () => {
      const mockDaysInMonthFn = jest.fn(() => 30);
      const daysArray = createCalendarDays(4, 2021, mockDaysInMonthFn);

      expect(mockDaysInMonthFn).toHaveBeenCalledWith(4, 2021);
      expect(daysArray).toHaveLength(30);
      expect(daysArray[0]).toEqual(
        expect.objectContaining({
          dayOfTheWeek: expect.any(String),
          dayOfTheMonth: "01",
        })
      );
      expect(daysArray[29]).toEqual(
        expect.objectContaining({
          dayOfTheWeek: expect.any(String),
          dayOfTheMonth: "30",
        })
      );
    });

    it("should correctly create the day names and dates", () => {
      const daysArray = createCalendarDays(3, 2021, getDaysInMonthUTC);

      // March 1st, 2021 is a Monday
      expect(daysArray[0]).toEqual({
        dayOfTheWeek: "Mon",
        dayOfTheMonth: "01",
      });

      // March 31st, 2021 is a Wednesday
      const lastDayIndex = daysArray.length - 1;
      expect(daysArray[lastDayIndex]).toEqual({
        dayOfTheWeek: "Wed",
        dayOfTheMonth: "31",
      });
    });
  });
});
