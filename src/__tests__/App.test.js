import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe("Main page snapshot", () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<App />)
        expect(asFragment(<App />)).toMatchSnapshot()
    });
})

describe("rendering", () => {
    test('renders header', () => {
        const { getByText } = render(<App />);
        const headerElement = screen.getByText(/task tracker/i);
        expect(headerElement).toBeInTheDocument();
        expect(getByText('Task Tracker', { exact: false })).not.toBeNull();
    });

    test('shouldnt render addTask', () => {
        const { queryByLabelText } = render(<App />);
        expect(queryByLabelText('Enter Task')).toBeNull();
    });

    test('renders addTasks btn', () => {
        const { getByText, queryByLabelText } = render(<App />);
        fireEvent.click(getByText('Add'))
        expect(getByText('Close')).not.toBeNull();
        fireEvent.click(getByText('Close'))
        expect(queryByLabelText('Enter Task')).toBeNull();
    });
})


// test('renders', () => {
//     const root = document.createElement('div');

//     ReactDom.render(<App />, root)

//     expect(root.querySelector('header h1').textContent).toBe(
//         "Task Tracker"
//     );


//     const {getByText, getByLabelText} = getQueriesForElement(root); 

//     //check if heading present or not
//     expect(getByText('Task Tracker')).not.toBeNull();

//     //form check label matches the feild id (htmlFor)
//     // expect(getByLabelText('Enter Task')).not.toBeNull();

//     ReactDom.unmountComponentAtNode(root);
// });
