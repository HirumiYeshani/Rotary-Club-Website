import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
} from "react-icons/fi";

import calendar from "../assets/calendar.jpg";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const sampleEvents = [
        {
          id: 1,
          title: "Year End Christmas Party",
          date: "2024-12-25",
          month: "December",
          description: "Our Annual Christmas celebration",
          details:
            "Live music performances, Traditional Christmas dinner, Guest appearance by Santa",
          category: "social",
          past: true,
        },
        {
          id: 2,
          title: "Karaoke Night",
          date: "2024-10-14",
          month: "October",
          description: "An evening of music and fun",
          details:
            "Open mic karaoke, Light refreshments, Prizes for best performances",
          category: "social",
          past: true,
        },
        {
          id: 3,
          title: "Club Assembly",
          date: "2024-12-15",
          month: "December",
          description: "Quarterly club assembly agenda",
          details: "Presidents report, Committee updates, Strategic planning",
          category: "work",
          past: true,
        },
      ];
      setEvents(sampleEvents);
      setFilteredEvents(sampleEvents.filter((event) => event.past));
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let result = [...events].filter((event) => event.past);

    if (searchTerm) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedMonth) {
      result = result.filter((event) => event.month === selectedMonth);
    }

    if (selectedDate) {
      result = result.filter((event) => event.date === selectedDate);
    }

    setFilteredEvents(result.slice(0, 3));
  }, [searchTerm, selectedMonth, selectedDate, events]);

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(
      direction === "prev" ? newDate.getMonth() - 1 : newDate.getMonth() + 1
    );
    setCurrentDate(newDate);
    setSelectedMonth(newDate.toLocaleString("default", { month: "long" }));
  };

  const toggleEventDetails = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const months = [
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

  const generateDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 border"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      const dayEvents = events.filter((event) => event.date === dateStr);
      const isPast = new Date(dateStr) < new Date();

      days.push(
        <div
          key={day}
          className={`h-12 border p-1 cursor-pointer hover:bg-blue-50 transition-colors ${
            selectedDate === dateStr ? "bg-blue-100" : ""
          } ${!isPast ? "opacity-50" : ""}`}
          onClick={() => isPast && setSelectedDate(dateStr)}
        >
          <div className="flex justify-between">
            <span className={`text-sm ${isPast ? "text-black" : "text-white"}`}>
              {day}
            </span>
            {dayEvents.length > 0 && isPast && (
              <span className="w-2 h-2 rounded-full bg-white"></span>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div
        className="relative pt-[100px] h-[calc(70vh-90px)] min-h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${calendar})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              <span className="block">Together in Action </span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our calendar of events and join the journey of service
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-black" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-black rounded-md leading-5 bg-white placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search past events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <select
                className="block w-full sm:w-40 px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="">All Months</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              <input
                type="date"
                className="block w-full sm:w-40 px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />

              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-blue-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FiRefreshCw
                  className={`mr-2 ${isLoading ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigateMonth("prev")}
                  className="p-1 rounded-full hover:bg-white"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-semibold text-black">
                  {currentDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </h2>
                <button
                  onClick={() => navigateMonth("next")}
                  className="p-1 rounded-full hover:bg-white"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-blue-100">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="bg-blue-100 py-2 text-center text-sm font-medium text-blue-700"
                >
                  {day}
                </div>
              ))}

              {generateDays()}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-medium text-black mb-4 flex items-center">
                <FiCalendar className="mr-2 text-blue-600" />
                Past Events
              </h3>

              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : filteredEvents.length === 0 ? (
                <p className="text-black text-center py-4">
                  No past events found
                </p>
              ) : (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`border rounded-lg p-4 transition-all ${
                        expandedEvent === event.id
                          ? "bg-blue-50"
                          : "hover:shadow-md"
                      }`}
                      onClick={() => toggleEventDetails(event.id)}
                    >
                      <div className="flex justify-between items-start cursor-pointer">
                        <div>
                          <h4 className="font-medium text-black">
                            {event.title}
                          </h4>
                          <p className="text-sm text-black mt-1">
                            {event.description}
                          </p>
                        </div>
                        <span className="text-xs text-white">
                          {event.date}
                        </span>
                      </div>

                      {expandedEvent === event.id && (
                        <div className="mt-3 pt-3 border-t border-blue-200">
                          <p className="text-sm text-black">{event.details}</p>
                          <div className="mt-2 text-xs text-black">
                            <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800">
                              {event.category}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
