/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import isBetween from "dayjs/plugin/isBetween";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import AssignAnalyst from "./AssignTeam";
import Modal from "../ui/Modal";

// Extend dayjs with all necessary plugins
dayjs.extend(localeData);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
dayjs.extend(isSameOrAfter);

// On-call assignments data
const assignments: any = [];

export const getDaysInMonth = (year: number, month: number) => {
  return dayjs().year(year).month(month).daysInMonth();
};

export const getDaysInPreviousMonth = (year: number, month: number) => {
  const prevMonth = dayjs().year(year).month(month).subtract(1, "month");
  const daysInPrevMonth = prevMonth.daysInMonth();
  return Array.from({ length: daysInPrevMonth }, (_, i) => i + 1);
};

interface Assignment {
  name: string;
  startDate: string;
  endDate: string;
}

// Reusable Button Component for styling consistency
const DayButton = ({
  day,
  isCurrentMonth,
  isToday,
  assignment,
}: {
  day: number;
  isCurrentMonth: boolean;
  isToday?: boolean;
  assignment?: Assignment | null;
}) => {
  return (
    <div
      className={`w-full h-24 p-2 flex flex-col justify-center items-center border border-zinc-100 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-100 ${
        isCurrentMonth ? "text-gray-800" : "text-gray-400"
      } 
    ${isToday ? "bg-IMSLightGreen text-white hover:text-gray-400" : ""}
    shadow-sm`}
    >
      <span className="text-xl font-medium">{day}</span>
      {assignment && (
        <div className="text-xs text-green-600 font-semibold text-center mt-2">
          {assignment.name}
          <br />({dayjs(assignment.startDate).format("D/M/YY")} -{" "}
          {dayjs(assignment.endDate).format("D/M/YY")})
        </div>
      )}
    </div>
  );
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [openAssignmentForm, setOpenAssignmentForm] = useState(false);

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  const startDay = dayjs()
    .year(currentYear)
    .month(currentMonth)
    .startOf("month")
    .day();
  const daysInPreviousMonth = getDaysInPreviousMonth(currentYear, currentMonth);
  const today = dayjs(); // Get today's date here

  const renderDays = () => {
    const days = [];
    const prevMonthDays = daysInPreviousMonth.slice(-startDay);
    const firstDayOfMonth = dayjs()
      .year(currentYear)
      .month(currentMonth)
      .date(1);

    for (const day of prevMonthDays) {
      days.push(
        <div onClick={() => setOpenAssignmentForm(true)}>
          <DayButton
            key={`prev-${day}`}
            day={day}
            isCurrentMonth={false}
            isToday={false}
          />
        </div>
      );
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const isToday = firstDayOfMonth.date(day).isSame(today, "day");
      const currentDate = firstDayOfMonth.date(day);
      const assignedPerson = assignments?.find((assignment: any) =>
        currentDate.isBetween(
          dayjs(assignment.startDate),
          dayjs(assignment.endDate),
          "day",
          "[]"
        )
      );
      days.push(
        <div onClick={() => setOpenAssignmentForm(true)}>
          <DayButton
            key={`current-${day}`}
            day={day}
            isCurrentMonth={true}
            isToday={isToday}
            assignment={assignedPerson}
          />
        </div>
      );
    }

    const totalDays = days.length;
    const nextMonthDaysToAdd = 42 - totalDays; // 6 rows * 7 days
    for (let day = 1; day <= nextMonthDaysToAdd; day++) {
      days.push(
        <div onClick={() => setOpenAssignmentForm(true)}>
          <DayButton
            key={`next-${day}`}
            day={day}
            isCurrentMonth={false}
            isToday={false}
          />
        </div>
      );
    }

    return days;
  };

  const dayLabels = dayjs().localeData().weekdays();

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white">On-Call Schedule</h2>
        <div className="flex space-x-4">
          <select
            value={currentMonth}
            onChange={(e) => setCurrentMonth(Number(e.target.value))}
            className="p-2 border rounded-md text-sm"
          >
            {dayjs()
              .localeData()
              .months()
              .map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
          </select>
          <select
            value={currentYear}
            onChange={(e) => setCurrentYear(Number(e.target.value))}
            className="p-2 border rounded-md text-sm"
          >
            {Array.from({ length: 5 }, (_, i) => dayjs().year() + i).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayLabels.map((day) => (
          <div
            key={day}
            className="bg-IMSLightGreen text-sm text-white rounded-md p-3 text-center font-semibold"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{renderDays()}</div>

      <Modal
        isOpen={openAssignmentForm}
        onClose={() => setOpenAssignmentForm(false)}
      >
        <AssignAnalyst onClose={() => setOpenAssignmentForm(false)} />
      </Modal>
    </div>
  );
};

export default Calendar;
