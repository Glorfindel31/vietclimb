import style from './card.module.css';
import {ReactNode} from 'react';

export default function Card({children}: {children?: ReactNode}) {
  return <div className={style.container}>{children}</div>;
}
