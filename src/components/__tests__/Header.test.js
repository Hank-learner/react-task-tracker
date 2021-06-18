import renderer from 'react-test-renderer';
import Header from '../Header';

// const validProps = {

// }

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/"
    })
}));

describe('Header snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});