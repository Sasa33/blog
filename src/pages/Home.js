import React, {Component} from 'react';
import './App.css';
import { Navigation, Search, Table } from "../components/";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as newsActions from '../actions/news'

export const DEFAULT_PAGE = 0;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchItem: 'react',
            searchKey: ''
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
        this.setState({ searchKey: searchItem });
        this.props.actions.fetchNews(searchItem, page);
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
        const { searchItem, searchKey } = this.state;
        const result = this.props.news[searchKey];

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

const mapStateToProps = (state) => ({
    news: state.news
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(newsActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
