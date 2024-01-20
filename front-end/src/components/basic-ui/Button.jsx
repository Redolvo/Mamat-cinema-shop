import PropTypes from "prop-types";

const Button = (props) => {
    // shapes
    const shapes = {
        rounded: "rounded",
        square: "rounded-none",
        pill: "rounded-3xl",
        circle: "rounded-full !p-2.5",
    };
    const sizes = {
        small: "py-1 px-2.5 text-sm",
        medium: "py-2 px-4",
        large: "py-3 px-6",
    };
    const types = {
        button: "button",
        submit: "submit",
    };
    // Props ( color, size, className, onClick )
    const addcolor =
        "text-white bg-blues-500 border-blues-500 hover:bg-blues-600 hover:border-blues-600";
    const addSize = props.size ? sizes[props.size] : "py-2 px-4";
    const addshape = props.shape ? shapes[props.shape] : "rounded";
    const addtype = props.type ? types[props.type] : "button";
    const addClass = props.className ? `${props.className} ` : "";
    const typeClick = props.onClick;
    const disabled_css = props.disabled
        ? " !border-greys-600 !bg-greys-600 cursor-not-allowed"
        : "";

    return (
        <>
            {typeClick ? (
                <button
                    onClick={props.onClick}
                    className={`${addClass}inline-block text-center border hover:ring-0 focus:outline-none focus:ring-0 ${addSize} ${addcolor} ${addshape} ${disabled_css}`}
                    disabled={props.disabled}
                    type={`${addtype}`}
                >
                    {props.children}
                </button>
            ) : (
                <button
                    className={`${addClass}inline-block text-center border hover:ring-0 focus:outline-none focus:ring-0 ${addSize} ${addcolor} ${addshape} ${disabled_css}`}
                    disabled={props.disabled}
                    type={`${addtype}`}
                >
                    {props.children}
                </button>
            )}
        </>
    );
};

Button.propTypes = {
    size: PropTypes.any,
    shape: PropTypes.any,
    type: PropTypes.any,
    className: PropTypes.any,
    onClick: PropTypes.any,
    children: PropTypes.any,
    disabled: PropTypes.any,
};

export default Button;
