import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import Results from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading.....</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  // + ALLOWS TRANSFORM STRING TO A NUMBER
  const numberYear = +filterYear;
  const numberMonth = +filterMonth;
  // URL VALIDATION
  if (
    isNaN(numberYear) ||
    isNaN(numberMonth) ||
    numberYear > 2021 ||
    numberYear < 2021 ||
    numberMonth < 1 ||
    numberMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invali filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">SHOW ALL EVENTS</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numberYear,
    month: numberMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events to display</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">SHOW ALL EVENTS</Button>
        </div>
      </>
    );
  }

  const date = new Date(numberYear, numberMonth - 1);

  return (
    <>
      <Results date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
