import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h3>hello</h3>
                <div>welcome</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="sam" 
                    timeAgo="today 4" 
                    content="aa"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="alex" 
                    timeAgo="today 2" 
                    content="bb"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
           
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="yesterday 6" 
                    content="cc"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>        
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);