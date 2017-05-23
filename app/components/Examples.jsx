var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {

    return (
      <div>
        <h1 className="text-center page_title">Examples</h1>
        <p>Here are a few example location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Hyderabad'>Hyderabad, India</Link>
          </li>
          <li>
            <Link to='/?location=London'>London, UK</Link>
          </li>
        </ol>
      </div>
    );
};

module.exports = Examples;
