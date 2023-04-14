import React from 'react'
import { DateTime, Settings } from "luxon";

const Calendar = () => {
    

    const startDate = DateTime.local().startOf("month").startOf("week");

    const endDate = DateTime.local().endOf("month").endOf("week");
    const lastmonthdate = startDate.minus(1, "day")
    const calendar = [];

    // while (lastmonthdate(endDate, "day")) {
    //     calendar.push(
    //         Array(7).fill(0).map(() => {
    //             lastmonthdate.plus(1, "day")
    //         })
    //     )
    // }


    console.log("Current Date", startDate.toLocaleString());
    return (
        <>


            <div> {startDate.toLocaleString(DateTime.DATE_MED)} </div>
            <div> {startDate.day} </div>
            <div> {endDate.toLocaleString(DateTime.DATE_MED)} </div>
            <div> {endDate.day} </div>
            <div> {lastmonthdate.toLocaleString(DateTime.DATE_MED)} </div>
            <div> {lastmonthdate.day} </div>

            {calendar.map((week) => {
                <div>
                    {week.map((day) => {
                        return <div>{day.toFormat("D").toLocaleString(DateTime.DATE_MED)}</div>
                    })}
                </div>
            })}





        </>
    )
}

export default Calendar






