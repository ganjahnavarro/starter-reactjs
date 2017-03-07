import React from 'react'
import ViewComponent from './abstract/ViewComponent'

class App extends ViewComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            {this.props.children}
        </div>;
    }

}

export default App;
