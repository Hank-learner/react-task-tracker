import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

const mockOnAdd = jest.fn()
jest.mock('../../App', () => {
    return jest.fn(() => ({
        onAdd: mockOnAdd
    }))
})

const validProps = {
    color:'brown',
    text : 'Add',
    onClick: mockOnAdd,
    dataTestID:'add-task'
}

describe('Button snapshot test', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<Button {...validProps} text/>)
        expect(asFragment(<Button {...validProps} />)).toMatchSnapshot()
    });
});

test('can click add btn', () => {
    const { getByTestId } = render(<Button {...validProps}/>)
    fireEvent.click(getByTestId('add-task'))
    expect(mockOnAdd).toBeCalled()
})

// describe('render testing', () => {

//     test('renders addTask', () => {
//         const { getByText } = renderer.create(Button).toJSON();
//         expect(getByText('Developed with help of Traversy Media © 2021', { exact: false })).not.toBeNull();
//     });
// })