import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation()

    return (
        <header className='header'>
            {/* <h1 style={{ color: "red", backgroundColor: "black" }}>{props.title}</h1>
            <h2 style={headingStyle}>hey there</h2> */}
            <h1>{title}</h1>
            {location.pathname ==='/' &&
                <Button
                    color={showAddTask ? 'red' : 'green'}
                    text={showAddTask ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            }
        </header>
    )
}

Header.defaultProps = {
    title:"Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

//class
// class Header extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         };
//     }
//     render() {
//         return (
//             <p>{this.state.count}</p>
//         );
//     }
// }

//useRef hook - doesnt re render like setstate
// function App(){
// const myBtn = useRef(null)
// const clickIt = () => myBtn.current.click()
// return (<button ref={myBtn}></button>)
//}
export default Header;

