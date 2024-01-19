import PropTypes from "prop-types";

const Input = (props) => {
    const shapes = {
        rounded: "rounded",
        square: "rounded-none",
        pill: "rounded-3xl",
        circle: "rounded-full",
    };
    const sizes = {
        small: "py-1 px-2.5 text-sm",
        medium: "py-2 px-4",
        large: "py-3 px-6",
    };
    const addSize = props.size ? sizes[props.size] : "py-2 px-4";
    const addShape = props.shape ? shapes[props.shape] : "rounded";
    const addClass = props.className ? `${props.className}` : "";
    const addType = props.type ? `${props.type}` : "text";
    const addPM = props.parentMargin ? `${props.parentMargin}` : "mb-4";
    const addPC = props.parentClass ? `${props.parentClass}` : "";
    const disabled_css = props.disabled
        ? " !bg-gray-200 cursor-not-allowed"
        : "";
    return (
        <div className={`realtive ${addPC} ${addPM}`}>
            <input
                type={addType}
                aria-label={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                className={`${addClass} ${addSize} ${addShape} ${addSize} ${disabled_css}`}
                disabled={props.disabled}
                readOnly={props.readOnly}
                required={props.reaquired}
                autoComplete={
                    props.autoComplete ? `${props.autoComplete}` : "off"
                }
                spellCheck="false"
                ref={props.ref}
            />
        </div>
    );
};

Input.propTypes = {
    size: PropTypes.string,
    shape: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.any,
    parentMargin: PropTypes.string,
    parentClass: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    readOnly: PropTypes.bool,
    reaquired: PropTypes.bool,
    autoComplete: PropTypes.string,
    ref: PropTypes.any,
};

export default Input;
