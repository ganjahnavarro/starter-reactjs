import React from 'react'
import ViewComponent from './abstract/ViewComponent'
import { Link } from 'react-router'

class PageTwo extends ViewComponent {

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
						<p>At page two</p>
            <Link to="/pageOne">Go to page 1</Link>
		    </div>
		}
}

export default PageTwo;
