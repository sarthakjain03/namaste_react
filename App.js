import React from 'react';
import ReactDOM from 'react-dom/client';


const SubHeading = () => (
    <h1 id='head'>This is a React Element JSX heading 🚀</h1>
);

const Heading = () => (
    <div id='container'>
        {SubHeading()}
        <SubHeading />
        <SubHeading></SubHeading>
        <h1 id='heading'>This is a Functional React Component JSX Heading</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<Heading />);