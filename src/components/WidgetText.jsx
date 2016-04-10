var React = require('react');

var WidgetText = React.createClass({

	render: function () {

		return (
			<div>
				<h3>{this.props.heading}</h3>
				<p>{this.props.textBody}</p>
			</div>
		)

	}

});

module.exports = WidgetText;