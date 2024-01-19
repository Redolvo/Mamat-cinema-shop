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
        "text-gray-100 bg-indigo-500 border-indigo-500 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600";
    const addSize = props.size ? sizes[props.size] : "py-2 px-4";
    const addshape = props.shape ? shapes[props.shape] : "rounded";
    const addtype = props.type ? types[props.type] : "button";
    const addClass = props.className ? `${props.className} ` : "";
    const typeClick = props.onClick;
    return (
        <>
            {typeClick ? (
                <button
                    onClick={props.onClick}
                    className={`${addClass}inline-block text-center border leading-5 hover:ring-0 focus:outline-none focus:ring-0 ${addSize} ${addcolor} ${addshape}`}
                    type={`${addtype}`}
                >
                    {props.children}
                </button>
            ) : (
                <button
                    className={`${addClass}inline-block text-center border leading-5 hover:ring-0 focus:outline-none focus:ring-0 ${addSize} ${addcolor} ${addshape}`}
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
};

export default Button;
