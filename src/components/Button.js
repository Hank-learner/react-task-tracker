import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, dataTestID }) => {
    return (
        <button
            onClick={onClick}
            className='btn'
            style={{ backgroundColor: color }}
            data-testid={dataTestID}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    dataTestID: 'testing',
    text:'NULL',
    onClick: () => { console.log('button not assigned onClick') }
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    dataTestID: PropTypes.string
}

export default Button
