var React = require('react');

var WidgetText = require('./WidgetText.jsx');

var LargeWidget = React.createClass({

	render: function () {

		var colorPick = {
			minHeight: 200,
		}

		if(this.props.changeBackground){
			colorPick.background = this.props.changeBackground;
		}

		var widgetFooterStyle = {

			background: "#484d4d",
			color: "#dcdcdc"

		}

		var addMargin = {
			marginBottom: 30
		}

		return(
			<div>
				<div style={colorPick}></div>
					<div>
						<div style={widgetFooterStyle} className="col-md-4 text-center">
							<WidgetText heading={this.props.heading1} textBody={this.props.textBody1}/>
						</div>
						<div style={widgetFooterStyle} className="col-md-4 text-center">
							<WidgetText heading={this.props.heading2} textBody={this.props.textBody2}/>
						</div>
						<div style={widgetFooterStyle} className="col-md-4 text-center">
							<WidgetText heading={this.props.heading3} textBody={this.props.textBody3}/>
						</div>
					</div>
			</div>
		)

	}

});

module.exports = LargeWidget



