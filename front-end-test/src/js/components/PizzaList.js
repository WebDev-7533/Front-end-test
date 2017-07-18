import React from 'react';
import SortButton from './SortButton';

var PizzaList = React.createClass({

    render: function () {
        return (
            <div>
                <ul ref="component">
                    {
                        this.props.uiItems.map(function (item) {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
                <SortButton childClickMethod={this.props.onChildClick}/>
            </div>
        )
    }
});


export default PizzaList;
