import renderer from 'react-test-renderer';
import Tasks from '../Tasks';

const validProps = [
    {
        reminder: true,
        text: "testing",
        day: "5th sept 1948"
    },
    {
        reminder: false,
        text: "testing1",
        day: "5th sept 1948"
    }
]




describe('Tasks snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Tasks tasks={ validProps}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});