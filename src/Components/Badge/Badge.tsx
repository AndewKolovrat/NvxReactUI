import React, { HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Badge.scss';

interface BadgeProps extends HtmlHTMLAttributes<HTMLSpanElement> {
	color?: 'red' | 'yellow' | 'blue' | 'green' | string; 
	pill?: boolean;
	hintContainerID?: string;
	hint?: string;
	disabled?: boolean;
};

export const Badge: React.FC<BadgeProps> = ({ children, className, pill = false, color = "", hintContainerID = "table-tooltip", hint, disabled = false, ...other }) => {
	
	const classes = classNames( "rdc_badge body-small rdc_badge-" + color, className, {
		"rdc_rounded-pill": pill,
		"rdc_disabled": disabled
	});

	const props: any = {
		className: classes,
		...other
	};

	if ( !!hintContainerID && !!hint ) {
		props["data-tooltip-id"] = hintContainerID;
		props["data-tooltip-content"] = hint;
	}

	return (
		<span {...props}>
			{children}
		</span>
	);
};
