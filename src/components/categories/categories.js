import React, { Component } from 'react';

import './categories.scss';

class CategoriesComponent extends Component {

  constructor() {
    super();
    this.state = {
        activeCategory: ''
    };
     this.onCategoryChange = this.onCategoryChange.bind(this);
  }

  onCategoryChange(value){
    if (this.state.activeCategory !== value) {
      this.setState({activeCategory : value});
      this.props.onCategoryChange(value);
    } else {
      this.setState({activeCategory : ''});
      this.props.onCategoryChange('');
    }
  }


  render() {

    return (
        <div className="categories">
          <h6 className="category-title">Категории</h6>
          <div className="categories-wrapper" >
            <button className={this.state.activeCategory==='events' ? "activeCategory category-btn purple-btn" : "category-btn purple-btn"}
                    onClick={() => this.onCategoryChange('events')} >Мероприятия</button>
            <button className={this.state.activeCategory==="reminders" ? "activeCategory category-btn orange-btn" : "category-btn orange-btn"}
                   onClick={() => this.onCategoryChange('reminders')} >Напоминания</button>
            <button className={this.state.activeCategory==="birthdays" ? "activeCategory category-btn pink-btn" : "category-btn pink-btn"}
                    onClick={() => this.onCategoryChange('birthdays')}>Дни рождения</button>
            <button className={this.state.activeCategory==="holidays" ? "activeCategory category-btn blue-btn" : "category-btn blue-btn"}
                    onClick={() => this.onCategoryChange('holidays')}>Праздники</button>
          </div>
        </div>
    );
  }

}

export default CategoriesComponent;
