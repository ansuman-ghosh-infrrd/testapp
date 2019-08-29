import React, { Component } from 'react';

class Test extends Component {
    render() {
        function display() {
            fetch('http://dummy.restapiexample.com/api/v1/employees')
                .then(resp => resp.json())
                .then(resp => console.log(resp))
                .catch(err => console.log(err));
        }

        display();

        return (
            <div className="App">
                <div
                    style={{ height: '100vh', width: '100vw' }}
                    className="bg-primary">
                    <h1 className="display-1">bla</h1>
                </div>
            </div>
        );
    }
}

export default Test;
