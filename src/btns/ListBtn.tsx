import { ReactElement, useRef } from 'react';
import { ListIcon } from '../icons/list';
import './ListBtn.scss';

export const ListBtn = (): ReactElement => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button className="list-btn" ref={buttonRef}>
        <ListIcon />
      </button>
    </>
  );
};
