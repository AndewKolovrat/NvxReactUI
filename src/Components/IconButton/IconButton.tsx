import React from 'react';
import classNames from 'classnames';
import "./icon-button.scss";

interface IIconButtonProps {
	cssClass?: string;
	iconClass?: string;
	isWaiting?: boolean;
	disabled?: boolean;
	centered?: boolean;
	bordered?: boolean;
	color?: "blue" | "yellow" | "green" | "red";
	outline?: boolean;
	block?: boolean;
	children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const IconButton: React.FC<IIconButtonProps> = (props) => {

	const { children, color = "blue", centered, outline = false, bordered, isWaiting, cssClass, iconClass, block = false,
        onClick, ...otherProps 
    } = props;

	const classes = classNames('rdc_icon-btn', cssClass, color, {
		'rdc_outline': outline,
		'centered': centered,
		'bordered': bordered,
        'is-block': block
	});

	const renderContent = () => {
		if ( !!isWaiting ) {
			return (<span className='rdc_small_spiner' />);
		}
		else if ( !!iconClass ) {
			return (
				<>
					<span className={iconClass} onClick={onClick} />
					{!!children && children}
				</>
			);
		}
		else {
			return !!children && children;
		}
	};

	return (
		<button className={classes} {...otherProps}>
			{renderContent()}
		</button>
	);
}


export default IconButton;