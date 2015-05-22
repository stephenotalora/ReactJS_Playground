'use strict';

// includes
var React = require('react');
var StyleSheet = require('./layout.js');
var mountTarget = document.getElementById('mount-point');


var CountComp = React.createClass({
    render: function() {
        return (
            <div className='count'>
                <h3>{this.props.count}</h3>
            </div>
        );
    }
});

var TestComponent = React.createClass({
    getInitialState: function() {
        return { count: 0 };
    },

    render: function() {
        return (
           <div className='nameComp'>
               <h1>{this.props.name}</h1>
               <CountComp count={this.state.count} />
               <button type="button" style={StyleSheet.foo} onClick={this.incrementCount}>Incement</button>
           </div>
        );
    },

    incrementCount: function() {
        this.setState({
                count: ++this.state.count
        });
    }
});

React.render(
    <TestComponent name='Counter App'/>,
    mountTarget
);
