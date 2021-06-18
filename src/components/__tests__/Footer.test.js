import renderer from 'react-test-renderer';
import Footer from '../Footer';

// const validProps = {

// }


describe('Footer snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(Footer).toJSON();
        expect(tree).toMatchSnapshot();
    });
});