import React, { Component } from 'react';

import './add-modal.scss'
import TimePicker from "react-time-picker";

class AddModal extends Component {
    constructor() {
        super();
        this.state = {
            value:'',
            time: "11:00"
        };
        this.handleChange= this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onChange = time => this.setState({ time });


    render() {
        return (
          <div className="add-modal">
              <form className="form-wrapper">
                  <div className="event-name">
                      Название задачи:
                      <input className="input-field" size={27}  type="text"  name="eventName" required onChange={this.handleChange} value={this.state.eventName} />
                  </div>
                  <div className="date-name">
                      Дата:
                      <input className="select-date"  type="date"  name="dateName" required onChange={this.handleChange} value={this.state.dateName} />
                  </div>
                  <div className="time-name">
                      <span className="time-title">Время:</span>
                      <TimePicker className="time-input"
                          onChange={this.onChange}
                          value={this.state.time}
                      />
                  </div>
                  <div className="category-name">
                      <h5>Выберите категорию:</h5>
                      <label className="category-radio">
                          <input className="radio-field"  type="radio" name="category"  required onChange={this.handleChange} value={this.state.category} />
                          Мероприятие
                      </label>
                      <label className="category-radio">
                          <input className="radio-field"  type="radio" name="category"  required onChange={this.handleChange} value={this.state.category} />
                          Напоминание
                      </label>
                      <label className="category-radio">
                          <input className="radio-field"  type="radio" name="category"  required onChange={this.handleChange} value={this.state.category} />
                          Дни рождения
                      </label>
                      <label className="category-radio">
                          <input className="radio-field"  type="radio" name="category"  required onChange={this.handleChange} value={this.state.category} />
                          Праздники
                      </label>
                  </div>

                  <input className="btn-submit" type="submit" value="Добавить"/>
              </form>
          </div>
        )
    }

}

export default AddModal
