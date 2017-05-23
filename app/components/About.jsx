var React = require('react');

var About = (props)=>{

    return (
      <div>
        <h1 className='text-center page_title'>About</h1>
        <p>This is a weather application buit on React. I have built this to ge the hang of React.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a> - This was a JavaScript frameowrk used.
          </li>
          <li>
            <a href='http://openweathermap.org'>Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </div>
    );
};

module.exports = About;
