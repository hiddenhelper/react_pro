import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    const labelText = 'Enter Name';
    const btnText = { Text: 'Click Me'};
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="sam" 
                timeAgo="today 4" 
                content="aa"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="alex" 
                timeAgo="today 2" 
                content="bb"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="yesterday 6" 
                content="cc"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);