import { Link } from 'react-router-dom'
import styled from "styled-components";

const StyledAbout = styled.div`
    
    margin : 10px;
    ol{
        margin:0px 30px;
    }
`;

const StyledH4 = styled.h4`
    color: ${prop => prop.heading ? 'white' : 'lime'};;
`;

const About = () => {
    return (
        <StyledAbout>
            <StyledH4 heading={false}>Version 1.0.0</StyledH4>
            <StyledH4 heading={true}>A task-note taking application</StyledH4>
            <h6>Features:</h6>
            <ol>
                <li>Add Tasks</li>
                <li>View Tasks</li>
                <li>Delete Tasks</li>
                <li>Multiple page navigation</li>
                <li>Tag Tasks as important</li>
            </ol>
            <hr className='header-break'></hr>
            <Link to='/'>Go Back</Link>
        </StyledAbout>
    )
}

export default About
