import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    componentDidUpdate(){
        
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term)
    }
    render() {

        return (
                <nav className="navbar navbar-light bg-light justify-content-around pt-3">
                    <h2 className="w-100">Video</h2>
                    <form className="form-inline col-12 justify-content-between p-0 "
                        onSubmit={this.onSubmit}
                    >
                        <input className="form-control  mr-0 col-11"
                            type="search"
                            placeholder=""
                            name="term"
                            onChange={this.onChange}
                            value={this.state.value}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
        
        )
    }
}

export default SearchBar;