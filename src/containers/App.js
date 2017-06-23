import React, {Component} from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Search from '../components/Search/Search'
import Table from '../components/Table/Table'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchItem: 'react',
            result: []
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    componentDidMount() {
        const url = `https://hn.algolia.com/api/v1/search?query=${this.state.searchItem}`;
        fetch(url)
            .then((response) => response.json())
            .then(result => this.setSearchResults(result.hits))
    }

    setSearchResults(result) {
        this.setState({
            result
        })
    }

    onSearchChange(text) {
        this.setState({
            searchItem: text
        })
    }

    onSearchSubmit(e) {
        console.log(this.state.searchItem)
        const url = `https://hn.algolia.com/api/v1/search?query=${this.state.searchItem}`;
        fetch(url)
            .then((response) => response.json())
            .then(result => this.setSearchResults(result.hits))
        e.preventDefault()
    }

    render() {
        const { searchItem, result } = this.state;

        return (
            <div className="App">
                <Navigation active="home"/>
                <div>
                    <Search value={searchItem}
                            onChange={this.onSearchChange}
                            onSubmit={this.onSearchSubmit}>
                        Search
                    </Search>
                    <Table list={result} />
                </div>
            </div>
        );
    }
}

export default App;
