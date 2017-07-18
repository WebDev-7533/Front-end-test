import React from 'react';
import PizzaList from './PizzaList';


var InputBox = React.createClass({

    getInitialState: function () {
        return this.state = {value: 'Search here...', items: [], initialItems: []};
    },

    render: function () {
        return (
            <div className="pizza-inputContainer">
                <input type="text" className="pizza-inputBox" value={this.state.value}
                       onChange={this.handleChange}/>
                <PizzaList uiItems={this.state.items} onChildClick={this.onChildClick}/>
            </div>
        )
    },

    onChildClick: function () {
        this.setState({
            items: this.state.items.sort(function (comparator1, comparator2) {
                return comparator1.toLowerCase().localeCompare(comparator2.toLowerCase());
            }).reverse()
        });
    },

    componentWillMount: function () {
        this.setState({items: this.state.initialItems});
    },

    componentDidMount: function () {
        var  reqMethod= {
            method: "GET"
        }
        fetch("./pizza.json", reqMethod).then((response) => {
            return response.json()
        }).then((data) => {
            this.state = {initialItems: data['pizzas'], items: []};
            this.setState({items: this.state.initialItems});
        });
    },

    handleChange: function (event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }
});

export default InputBox;
