var React = require('react');

var WidgetText = require('./WidgetText.jsx');

var SmallWidget = React.createClass({

	render: function () {

		var widgetStyle = {

			marginTop: 30,
			background: "#f5f7fa"

		}

		return(
			<div style={widgetStyle} className="well">
				<WidgetText heading={this.props.heading} textBody={this.props.textBody} /> 
			</div>
		)

	}

});

module.exports = SmallWidget;