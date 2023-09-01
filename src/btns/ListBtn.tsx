import { ReactElement, useRef } from 'react';
import { ListIcon } from '../icons/ListIcon';
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
