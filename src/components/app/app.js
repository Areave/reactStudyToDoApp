import React from 'react';
import Header from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import Filter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import style from './App.module.css';




const getResources = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`somethin goin wrong on ${url}, buddy, status ${res.status}`);
    }
    return await res.json();
};



getResources('https://jsonplaceholder.typicode.com/todos')
    .then(data => {

    }
    );






export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'to feed my dog', important: false, key: "1", liked: false, count: 0 },

            ],
            term: '',
            param: ''
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.onLike = this.onLike.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.setTerm = this.setTerm.bind(this);
        this.filterData = this.filterData.bind(this);
        this.setParam = this.setParam.bind(this);
    }

    filterData(data, param) {
        if (param === 'liked') {
            return data.filter(item => item.liked)
        }
        else {
            return data;
        }
    }

    searchPost(data, newTerm) {

        if (newTerm === '') { return data }
        else {
            return this.state.data.filter(item => item.label.includes(newTerm));

        }
    }

    setTerm(term) {
        this.setState({ term });
    }

    setParam(param) {
        this.setState({ param });
    }



    deleteItem(id) {

        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.key === id);
            const newData = [];
            data.forEach((item, thisIndex) => {
                if (thisIndex !== index) { newData.push(item) };
            });
            return { data: newData }
        })
    }

    addItem = (event, text) => {
        event.preventDefault();
        this.setState(({ data }) => {
            const newPost =
                { label: text, important: false, key: data.length + 1, liked: false, count: 0 };
            const newData = [...data, newPost];
            return { data: newData }
        })
    }

    onLike(id) {

        console.log('kinda workin' + id);
        this.setState(({ data }) => {

            const index = data.findIndex(elem => elem.key === id);
            const old = data[index];
            const newData = { ...old, liked: !old.liked };
            return { data: [...data.slice(0, index), newData, ...data.slice(index + 1)] };


        });

    }


    onImportant = (id) => {
        this.setState(({ data }) => {

            const index = data.findIndex(elem => elem.key === id);
            const old = data[index];
            const newData = { ...old, important: !old.important };
            return { data: [...data.slice(0, index), newData, ...data.slice(index + 1)] };
        });
    }



    render() {
        const { data, term, param, } = this.state;
        const newData = this.searchPost(data, term);
        const newData2 = this.filterData(newData, param);
        return (
            <div className={style.app} >
                <Header amount={data.length} likedAmount={data.filter(item => item.liked === true).length} />
                <div className="search-panel d-flex">
                    <SearchPanel setTerm={this.setTerm} />
                    <Filter setParam={this.setParam} />
                </div>
                <PostList
                    posts={newData2}
                    onDelete={this.deleteItem}
                    onLike={this.onLike}
                    onImportant={this.onImportant}
                />
                <PostAddForm addText={this.addText} addItem={this.addItem} />

            </div>
        );
    }
}





