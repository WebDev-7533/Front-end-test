import React from 'react';

var SortButton = React.createClass ({

    render: function() {
        return(
                <button ref="component" onClick={this.props.childClickMethod}
                className="sortbutton" type='button'>Sort</button>
              )
    }

});
export default SortButton;
