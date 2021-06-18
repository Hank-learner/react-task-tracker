import renderer from 'react-test-renderer';
import About from '../About';

// const validProps = {

// }


describe('About snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(About).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

// describe('render testing', () => {

//     test('renders addTask', () => {
//         const { getByText } = renderer.create(About).toJSON();
//         expect(getByText('Developed with help of Traversy Media © 2021', { exact: false })).not.toBeNull();
//     });
// })