import React, { Component } from 'react';

import './calendar-page.scss';
import NavigationSidebar from "../../components/navigation-sidebar";
import TasksList from "../../components/tasks-list";
import SearchPanel from "../../components/search-panel";
import CalendarComponent from "../../components/calendar";
import CategoriesComponent from "../../components/categories";
import Modal from 'react-modal';
import AddModal from "../../components/add-modal";

Modal.setAppElement('#root');

class CalendarPage extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      term: '',
      date: new Date(),
      day: '',
      activeCategory:'',
      addModalIsOpen: false,
      calendarDate: ''
    };
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: [
        {
          title: "Закончить наконец-то курсовую",
          time: "09:00",
          category: "events",
          date: new Date(1589403600000)
        },
        {
          title: "Отпраздновать день ужасного дизайна",
          time: "12:00",
          category: "birthdays",
          date: new Date(1589662800000)
        },
        {
          title: "На шашлыки",
          time: "14:00",
          category: "holidays",
          date: new Date(1589662800000)
        },
        {
          title: "Не забыть про стрижку",
          time: "11:00",
          category: "reminders",
          date: new Date(1589662800000)
        },
        {
          title: "День независимости",
          time: "08:00",
          category: "events",
          date: new Date(1589662800000)
        }
      ]
    });
    this.getDate(this.state.date);
  }

  // find date

  searchDate(items, calendarDate) {
    if(!calendarDate) return items;

    return items.filter((item) => {
      if (this.getItemDate(item.date) === calendarDate) {
        return item;
      }
    });
  }

  getItemDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const day = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
    return day;
  }

  //sort by category

  onCategoryChange = (value) => {
    this.setState({ activeCategory: value });
  };

  searchCategory(items, activeCategory){
    if(!activeCategory) return items;
    return items.filter((item)=>{
      return item.category.toLowerCase().indexOf(activeCategory.toLowerCase()) > -1;
    })
  }

  // sort by date

  getDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const day = date.getDate() + ' ' + months[date.getMonth()];
    this.setState({ day });
  }

  // поиск
  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (!term) return items;
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onCalendarChange = (date) => {
    const calendarDate = this.getItemDate(date);
    this.setState({
      date,
      calendarDate
    });
  };

  toggleAddModal(value) {
    this.setState({addModalIsOpen: value})
  }


  render() {
    let searchedItems = this.search(this.state.items, this.state.term);
    searchedItems = this.searchCategory(searchedItems, this.state.activeCategory);
    searchedItems = this.searchDate(searchedItems, this.state.calendarDate);

    return (
        <div className="wrapper calendar-page">
          <div className="left-sidebar">
            <NavigationSidebar/>
          </div>
          <div className="main-panel">
            <div className="top-panel">
              <h4 className="date">{this.state.day} {this.state.date.getFullYear()}</h4>

              <div className="icons-block">
                  <SearchPanel onSearchChange={this.onSearchChange} />
                  <button onClick={() => this.toggleAddModal(true)} className="add-icon"/>
              </div>
            </div>
            <TasksList items={searchedItems}/>
          </div>

          <div className="right-sidebar">
             <CalendarComponent onCalendarChange={this.onCalendarChange} />
             <CategoriesComponent onCategoryChange={this.onCategoryChange}/>
          </div>

          <Modal
            isOpen={this.state.addModalIsOpen}
            onRequestClose={() => this.toggleAddModal(false)}
            className="modal-window"
            contentLabel="Add Modal">
            <button className="modal-close btn-clear" onClick={() => this.toggleAddModal(false)}/>
            <AddModal/>
          </Modal>
        </div>
    );
  }

}

export default CalendarPage;
