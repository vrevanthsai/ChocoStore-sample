import clsx from "clsx"
import PropTypes from 'prop-types';
export default function Button (props) {
    const {className,children,...rest}=props
    const classes=clsx("btn",className)
    return(
        <button type="button" className={classes} {...rest}>{children}</button>
    )
}
Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.string
};