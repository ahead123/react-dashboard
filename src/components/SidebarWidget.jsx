var React = require('react');

var WidgetText = require('./WidgetText.jsx');

var SidebarWidget = React.createClass({

	render: function () {

		var sidebarStyle = {

		}

		if(this.props.changeSidebarBackground){
			sidebarStyle.background = this.props.changeSidebarBackground;
		}

		return (
			<div style={sidebarStyle}>
				<WidgetText heading={this.props.sideBarHeading} textBody={this.props.sideBarTextBody}/>
			</div>
		)

	}

});

module.exports = SidebarWidget;