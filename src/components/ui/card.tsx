import style from './card.module.css';
import {ReactNode} from 'react';

export default function Card({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <div className={className ? className : style.container}>{children}</div>;
}
