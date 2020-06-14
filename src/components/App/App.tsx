import React from 'react';
import moment from 'moment';
import { DayModel } from "../../models/TimetableModels";
import { Day } from "../Day/Day";
import { Header } from "../Header/Header";
import { Loader } from "@skbkontur/react-ui";

const styles = require('./App.module.css')

interface AppState {
  group: string,
  date: string,
  loaded: boolean;
  days: DayModel[];
}

class App extends React.Component<{}, AppState> {
  public groups: string[] = ["344", "341"]

  constructor(props: any) {
    super(props);

    const storedGroup = localStorage.getItem('GroupNumber') as string;
    const today = moment().format('DD.MM.YYYY')

    this.state = {
      date: today,
      group: storedGroup ? storedGroup : "344",
      loaded: false,
      days: []
    }
  }

  componentDidMount() {
    this.makeRequest()
  }

  makeRequest() {
    this.setState({ loaded: false });
    let groupNumber = this.mapGroupNumber(this.state.group)
    let queryDate = moment(this.state.date, 'DD.MM.YYYY').startOf('isoWeek').format('YYYY.MM.DD')
    let formattedDate = moment(queryDate, 'YYYY.MM.DD').format('DD.MM.YYYY')
    fetch(`https://timetable.spbu.ru/api/v1/groups/${groupNumber}/events/${queryDate}?timetable=Unknown`)
        .then(response => response.json())
        .then(response => this.setState({ loaded: true, date: formattedDate, days: response.Days }));
  }

  mapGroupNumber(groupNumber: string) {
    if (groupNumber === "344")
      return "248840"
    else
      return "247842"
  }

  private changeGroup = (groupNumber: string) => {
    this.setState(
        {
          group: groupNumber,
          days: []
        },
        () => { this.makeRequest(); }
    )
    localStorage.setItem('GroupNumber', groupNumber);
  };

  private changeDate = (date: string) => {
    this.setState(
        {
          date: date,
          days: []
        },
        () => { this.makeRequest(); }
    )
  };

  render() {
    const { group, date, days } = this.state;

      return (
          <Loader active={!this.state.loaded} type={'big'}>
            <div className={styles.app}>
              <Header
                  groupNumber={group} groups={this.groups} onChangeGroup={this.changeGroup}
                  date={date} onChangeDate={this.changeDate}
              />
              <ul className={styles.list}>
                {days.map(day => <Day day={day} />)}
              </ul>
            </div>
          </Loader>
      );
  }
}

export default App;
