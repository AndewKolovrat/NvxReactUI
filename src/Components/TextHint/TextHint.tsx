import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import './texthint.scss';

interface TextHintProps extends React.HTMLProps<HTMLInputElement> {
	children: string;
	hint?: string;
	onParent?: boolean;
};

/** Компонента для отображения текста, при переполнении текст обрезается и показывается подсказка  */
const TextHint: React.FC<TextHintProps> = ({ children, hint = '', onParent = true, ...otherProps }) => {

	const spanRef = useRef<HTMLDivElement>(null);

	useEffect( () => {
		if ( !!spanRef && !!spanRef.current ) {
			const spanSize = spanRef.current.clientWidth;
			const textSize = spanRef.current.scrollWidth;
			const element = onParent ? spanRef.current.parentElement : spanRef.current;
			const text = !!hint ? hint : children;
			if (textSize > spanSize) {
				if ( onParent ) {
					element?.setAttribute( "data-hint", text );
				}
				if ( !element?.classList.contains("hint") && !!text)
					element?.classList.add("hint");

				return;
			}
			if ( element?.classList.contains("hint") ) {
				element?.classList.remove("hint");
			}
		}
	}, [ children, hint, onParent ] );

	return (
		<div ref={spanRef} {...otherProps} className={classNames("rdc_texthint", otherProps.className)} data-hint={!!hint ? hint : children}>
			{children}
		</div>
	);
};

export default TextHint;
