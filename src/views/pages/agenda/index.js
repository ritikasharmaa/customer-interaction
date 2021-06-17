import React, { Component } from "react";
import CalendarApp from "../../../components/Calendar/Calendar";
import { GOOGLE_API_KEY, CALENDAR_ID } from "../../../redux/Constants";

export class agenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  /* global gapi */
  getEvents() {
    let that = this;
    function start() {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            that.setState(
              {
                events,
              },
              () => {
                console.log(that.state.events, "event");
              }
            );
          },
          function (reason) {
            console.log(reason, "reason");
          }
        );
    }
    gapi.load("client", start);
  }
  render() {
    return (
      <div>
        <CalendarApp
          events={this.state.events}
          getEvents={this.getEvents.bind(this)}
        />
      </div>
    );
  }
}

export default agenda;
