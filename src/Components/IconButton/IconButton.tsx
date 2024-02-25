import React from 'react';
import classNames from 'classnames';
import "./icon-button.scss";

interface IIconButtonProps extends React.HTMLProps<HTMLButtonElement> {
	iconClass?: string;
	isWaiting?: boolean;
	// disabled?: boolean;
	centered?: boolean;
	bordered?: boolean;
	color?: "blue" | "yellow" | "green" | "red";
	outline?: boolean;
	block?: boolean;
	children?: React.ReactNode;
};

const IconButton: React.FC<IIconButtonProps> = (props) => {

	const { children, color = "blue", block = false, centered = false, outline = false, bordered, isWaiting, iconClass, ...otherProps } = props;

	const classes = classNames('rdc_icon-btn', otherProps.className, color, {
		'rdc_outline': outline,
		'centered': centered,
		'bordered': bordered,
		'block': block,
		'disabled': otherProps.disabled
	});

	const renderContent = () => {
		if ( !!isWaiting ) {
			return (<span className='rdc_small_spiner' />);
		}
		else if ( !!iconClass ) {
			return (
				<>
					<span className={iconClass} onClick={otherProps.onClick} />
					{!!children && children}
				</>
			);
		}
		else {
			return !!children && children;
		}
	};

	return (
		<button {...otherProps} type="button" className={classes}>
			{renderContent()}
		</button>
	);
}

export default IconButton;