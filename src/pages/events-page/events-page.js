import React, { Component } from 'react';

import './events-page.scss';
import NavigationSidebar from "../../components/navigation-sidebar";
import CalendarPage from "../calendar-page";
import SearchPanel from "../../components/search-panel";
import TasksList from "../../components/tasks-list";


class EventsPage extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {

    return (
        <div className="wrapper">
          <div className="left-sidebar">
            <NavigationSidebar/>
          </div>
            Пока здесь ничего нет, но будет
          </div>


    );
  }

}

export default EventsPage;
