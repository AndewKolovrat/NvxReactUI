import { ReactNode } from "react";
import classNames from 'classnames';
import "./style.scss";

export enum IconSizes {
    i24,
    i32
}

interface ITextWithIconProps {
    children: ReactNode | undefined;
    iconClasses: string;
    className?: string;
    size?: IconSizes;
}

/** Возвращает имя класса с описание размера иконки */
const getClassByEnum = (size?:IconSizes):string => {
    switch(size) {

        case IconSizes.i32: return "icon32";

        default:
        case IconSizes.i24: return "icon24";
    }
}

/** Компонент выводит текст с стоящей перед ним отцентрованой иконкой  */
const TextWithIcon = ({children, iconClasses, className, size}: ITextWithIconProps) => {
    return (
		<p className={classNames('inline-icon', className)}>
			<span className={classNames('icon-in-line', getClassByEnum(size), iconClasses)} />
			<span>{children}</span>
		</p>
    );
};

export default TextWithIcon;