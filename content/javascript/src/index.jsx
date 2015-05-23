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
           <div className='nameComp' style={StyleSheet.nameComp}>
               <h1>{this.props.name}</h1>
               <CountComp count={this.state.count} />
               <div style={StyleSheet.btn_container}>
                   <button type="button" style={StyleSheet.btn} onClick={this.incrementCount}>Incement</button>
               </div>
               <TextEntryTag />
           </div>
        );
    },

    incrementCount: function() {
        this.setState({
                count: ++this.state.count
        });
    }
});

var TextEntryTag = React.createClass({
    getInitialState: function() {
        return {text: ''}
    },

    onChange:function(e) {
        this.setState({text: e.target.value});
    },

    onClick: function(e) {
        alert("Boom!" + this.state.text);
        console.log(e);
    },

    render: function() {
        return (
           <div className='myComp'>
               <div className="holder"><p>Cool value is: {this.state.text}</p></div>
               <label htmlFor='entry'>JSX Entry</label>
               <input id='entry' type="text" onChange={this.onChange}/>
               <button type="button" style={StyleSheet.btn} onClick={this.onClick}>alert</button>
           </div>
        );
    }
});

React.render(
    <TestComponent name='Counter App'/>,
    mountTarget
);
