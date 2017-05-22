var React = require('react');
var {Link} = require('react-router');



var Nav = React.createClass({

  render: function() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
            <ul className="menu">
              <li className='menu-text'>React Weather App</li>
              <li>
                <Link to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
              </li>
              <li>
                <Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
              </li>
            </ul>
        </div>
        <div className='top-bar-right'>

        </div>

      </div>
    );
  }
});

module.exports = Nav;
