import React from "react";
import fetch from "isomorphic-fetch";
import InputBox from "./InputBox";

var Layout = React.createClass({

    getInitialState: function () {
        return (this.state = {list: []});

    },


    render: function () {
        return (
            <div className="pizza-container-parent">
                <InputBox/>
            </div>
        );
    }

});

export default Layout;
