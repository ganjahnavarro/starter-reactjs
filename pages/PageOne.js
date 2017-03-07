import React from 'react'
import ViewComponent from './abstract/ViewComponent'
import { Link } from 'react-router'

class PageOne extends ViewComponent {

		constructor(props) {
		    super(props);
		    this.state = {};
		}

		componentDidMount() {

		}

		componentDidUpdate() {

		}

		handleChange(event) {
		    var nextState = {};
		    nextState[event.target.name] = event.target.value;
		    this.setState(nextState);
		}

		render() {
		    return <div>
						<p>At page one</p>
            <Link to="/pageTwo">Go to page 2</Link>
		    </div>
		}
}

export default PageOne;
