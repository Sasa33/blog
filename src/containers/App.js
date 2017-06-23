import React, {Component} from 'react';
import './App.css';
import Navigation from "../components/Navigation/Navigation";
import Search from '../components/Search/Search'
import Table from '../components/Table/Table'

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const DEFAULT_PAGE = 0;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchItem: 'react',
            result: null
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.fetchSearchResult = this.fetchSearchResult.bind(this);
    }

    componentDidMount() {
        this.fetchSearchResult(DEFAULT_PAGE);
    }

    fetchSearchResult(page) {
        const { searchItem } = this.state;
        const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchItem}&${PARAM_PAGE}${page}`;
        fetch(url)
            .then((response) => response.json())
            .then(result => this.setSearchResults(result))
    }

    setSearchResults(result) {
        const oldHits = result.page !== 0 ? this.state.result.hits : [];
        this.setState({
            result: {
                hits: [
                    ...oldHits,
                    ...result.hits
                ],
                page: result.page
            }
        })
    }

    onSearchChange(text) {
        this.setState({
            searchItem: text
        })
    }

    onSearchSubmit(e) {
        this.fetchSearchResult(DEFAULT_PAGE);
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
                        result && <Table list={result.hits}
                                         loadMore={this.fetchSearchResult}
                                         nextPage={result.page + 1} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
