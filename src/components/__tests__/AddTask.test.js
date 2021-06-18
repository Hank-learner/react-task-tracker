import { render, screen, getQueriesForElement } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddTask from '../AddTask';
import App from '../../App';

// const validProps = {

// }


describe('AddTask snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<AddTask {...App.addTask} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('render testing', () => {

    test('renders addTask', () => {
        const { getByLabelText } = render(<AddTask {...App.addTask} />);
        expect(getByLabelText('Enter Task')).not.toBeNull();
    });
})

//  const {getByTestId} = render(<ContactForm {...props} />);
//  const contactInput = getByTestId(dataLocators.contact_name);
//  expect(contactInput).toBeDefined();
//  fireEvent(contactInput, 'onBlur');
//  expect(contactInput.props.value).toBe('gaurav++==');
//  fireEvent(
//  contactInput,
//  'onChangeText',
//  'really long long long long name dfbdjfbdfjgbdf fgkbjdfgfg',
//  );
//  expect(props.onChangeHandler).toBeCalledTimes(1);
//  });