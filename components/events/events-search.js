import { useRef } from "react";

import Button from "../ui/button";
import classes from "./events-search.module.css";

const items = [
  { id: 1, item: "Jan" },
  { id: 2, item: "Feb" },
  { id: 3, item: "Mar" },
  { id: 4, item: "Apr" },
  { id: 5, item: "May" },
  { id: 6, item: "Jun" },
  { id: 7, item: "Jul" },
  { id: 8, item: "Aug" },
  { id: 9, item: "Sep" },
  { id: 10, item: "Oct" },
  { id: 11, item: "Nob" },
  { id: 12, item: "Dec" },
];

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const yearItems = items.map((item) => {
    return (
      <option value={item.id.toString()} key={item.id}>
        {item.item}
      </option>
    );
  });

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {yearItems}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
