import buttonStyles from '../styles/buttonStyles';

const translateProps = (props) => {
    let _styles = { ...buttonStyles.default }
    if (!props.enabled) {
        _styles={..._styles, ...buttonStyles.disable}
    }
    const newProps = { ...props, styles: _styles }
    return newProps;
}

const withButtonToggle = (WrappedComponent) => {    

    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args))
    }
    // return (props) => {
    //     return (
    //         <WrappedComponent {...props} />
    //     )
    // }
}

export default withButtonToggle;

