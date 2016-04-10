var React = require('react');

var ReactDOM = require('react-dom');

var SmallWidget = require('./components/SmallWidget.jsx');

var LargeWidget = require('./components/LargeWidget.jsx');

var WeatherWidget = require('./components/WeatherWidget.jsx');

var SidebarWidget = require('./components/SidebarWidget.jsx');

ReactDOM.render(<SmallWidget heading="20" textBody="Followers added this month" />, document.getElementById('followers'));
ReactDOM.render(<SmallWidget heading="$ 1250" textBody="Average Monthly Income" />, document.getElementById('monthly_income'));
ReactDOM.render(<SmallWidget heading="$ 13865" textBody="Yearly Income Goal" />, document.getElementById('yearly_income'));

ReactDOM.render(<LargeWidget changeBackground="#0096d0" heading1="15080" heading2="12000" heading3="5100" textBody1="Shot Views" textBody2="Likes" textBody3="Comments" />, document.getElementById('dashboard_one'));
ReactDOM.render(<LargeWidget changeBackground="#cd59ae" heading1="15080" heading2="12000" heading3="5100" textBody1="Shot Views" textBody2="Likes" textBody3="Comments" />, document.getElementById('dashboard_two'));

ReactDOM.render(<WeatherWidget weatherColor="#ff8a00" weatherHeading="18 Celsius" weatherTextBody="Paris" />, document.getElementById('weather_box'));

ReactDOM.render(<SidebarWidget changeSidebarBackground="#0096d0" sideBarHeading="New Visitors" sideBarTextBody="1.5k" />, document.getElementById('visitors'));
ReactDOM.render(<SidebarWidget changeSidebarBackground="#b28ad6" sideBarHeading="Bounce Rate" sideBarTextBody="50%" />, document.getElementById('bounce'));
ReactDOM.render(<SidebarWidget changeSidebarBackground="#ff4826" sideBarHeading="Searches" sideBarTextBody="28%" />, document.getElementById('search'));
ReactDOM.render(<SidebarWidget changeSidebarBackground="#63c254" sideBarHeading="Traffic" sideBarTextBody="140.5 kb" />, document.getElementById('traffic'));
