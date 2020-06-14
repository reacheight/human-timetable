import React from "react";
import {DayModel} from "../../models/TimetableModels";
import {DayStudyEvent} from "../DayStudyEvent/DayStudyEvent";

const styles = require('./Day.module.css')

interface Props {
    day: DayModel;
}

export class Day extends React.Component<Props> {
    render() {
        let day = this.props.day;

        return (
            <li className={styles.day}>
                <p className={styles.header}>{day.DayString.substr(0, day.DayString.indexOf(','))}</p>
                <ul className={styles.list}>
                    {day.DayStudyEvents.map(event =><DayStudyEvent event={event} />)}
                </ul>
            </li>)
    }
}