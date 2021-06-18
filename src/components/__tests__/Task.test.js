import renderer from 'react-test-renderer';
import Task from '../Task';

const validProps = {
    reminder: true,
    text: "testing",
    day:"5th sept 1948"
}


describe('Task snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Task task={validProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});