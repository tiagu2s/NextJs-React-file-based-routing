import { useRef, useEffect } from "react";

import Button from "../ui/button";
import styles from "./events-search.module.css";
import axios from "axios";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputref = useRef();

  // useEffect(() => {
  //   const url =
  //     "http://api.exchangeratesapi.io/v1/latest?access_key=0216fa9cfc4af4d5934da317e7ecb69b";

  //   const teste = async () => {
  //     const array = await axios.get(url);
  //     console.log(array.data.rates);
  //   };
  //   teste();
  // }, []);

  function submitHandler(event) {
    //DONT LOSE THE STATE
    event.preventDefault();
    const selectYear = yearInputRef.current.value;
    const selectMonth = monthInputref.current.value;

    props.onSearch(selectYear, selectMonth);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2021">2022</option>
          </select>
        </div>

        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputref}>
            <option value="1">jan</option>
            <option value="2">fev</option>
            <option value="3">mar</option>
            <option value="4">abr</option>
            <option value="5">mai</option>
            <option value="6">jun</option>
            <option value="7">jul</option>
            <option value="8">ago</option>
            <option value="9">set</option>
            <option value="10">out</option>
            <option value="11">nov</option>
            <option value="12">dez</option>
          </select>
        </div>
      </div>
      <Button>Find</Button>
    </form>
  );
}

export default EventsSearch;
