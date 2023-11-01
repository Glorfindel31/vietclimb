'use client';
import style from './pageHead.module.css';

export default function PageHead() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.textHook}>Build the climbing foundations in Vietnam</h1>
      </div>
    </div>
  );
}
