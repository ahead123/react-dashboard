var React = require('react');

var WidgetText = require('./WidgetText.jsx');

var WeatherWidget = React.createClass({

	render: function() {

		var weatherStyle = {
			minHeight: 175

		}

		if(this.props.weatherColor){
			weatherStyle.background = this.props.weatherColor;
		}

		return (
			<div style={weatherStyle}>
				<WidgetText heading={this.props.weatherHeading} textBody={this.props.weatherTextBody}/>
			</div>
		)

	}

});

module.exports = WeatherWidget;