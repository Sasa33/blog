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
            result: null
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    componentDidMount() {
        this.fetchSearchResult();
    }

    fetchSearchResult() {
        const { searchItem } = this.state;
        const url = `https://hn.algolia.com/api/v1/search?query=${searchItem}`;
        fetch(url)
            .then((response) => response.json())
            .then(result => this.setSearchResults(result))
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
        this.fetchSearchResult();
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
                    {
                        result && <Table list={result.hits} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
