import { ReactElement, useRef } from 'react';
import { ListIcon } from '../icons/ListIcon';
import './ListBtn.scss';
import { GridIcon } from '../icons/GridIcon';

interface ListBtnProps {
  btn: 'table' | 'grid';
}

export const ListBtn = (props: ListBtnProps): ReactElement => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button className="list-btn" ref={buttonRef}>
        {props.btn === 'table' ? <ListIcon /> : <GridIcon />}
      </button>
    </>
  );
};
