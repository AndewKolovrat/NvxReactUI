import React, { FC, ReactEventHandler, ReactNode } from "react";
import classNames from "classnames";
import "./Modal.scss";

interface ModalProps {
	isOpen: boolean;
	onClose: ReactEventHandler;
	children: ReactNode,
	title?: string;
	className?: string;

	color?: "error" | "green";

	renderIcon?: FC | ReactNode;
	renderFooter?: FC | ReactNode;
};

const Modal: FC<ModalProps> = (props) => {

	const { isOpen, title = "ReDoc", className, color, onClose, children, renderIcon, renderFooter } = props;

	const onCloseHandler: ReactEventHandler = (e) => onClose(e);

	if ( !isOpen )
		return null;

	const modalClasses = classNames( "rdc_modal", className, color);

	return (
		<div className="rdc_blocked__wraper">
			<div className={modalClasses} >
				<div className="rdc_modal__header">
					<span className="rdc_modal__header__title headline-large">{title}</span>
					<button className="rdc_modal__header__close_btn" onClick={onCloseHandler}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.1345 5.71859C20.6156 5.21508 20.6066 4.41946 20.1141 3.92699C19.6056 3.41846 18.7783 3.42785 18.2814 3.94778L12.3189 10.1871L5.71865 3.86731C5.21524 3.38529 4.41892 3.39393 3.9261 3.88676C3.41791 4.39495 3.42688 5.2216 3.94598 5.71864L10.5061 12L4.22535 18.2807C3.72474 18.7813 3.72474 19.593 4.22534 20.0936C4.72595 20.5942 5.5376 20.5942 6.0382 20.0936L12.3189 13.8129L18.5864 20.0804C19.0794 20.5733 19.8898 20.5343 20.3332 19.9963C20.7136 19.5347 20.6889 18.8615 20.2756 18.4291L14.1318 12L20.1345 5.71859Z" fill="inherit"/>
					</svg>
					</button>
				</div>
				<div className="rdc_modal__content">

					{
						!!renderIcon &&
						<div className="rdc_modal__content__icon">
							{ typeof renderIcon === "function" ? renderIcon(props) : renderIcon }
						</div>
					}

					<p className="rdc_modal__content__text body_large">{children}</p>

				</div>
				<div className="rdc_modal__footer">
				{
					!!renderFooter && typeof renderFooter === "function" ? renderFooter(props) : renderFooter
				}
				</div>
			</div>
		</div>
	);
};

export default Modal;
