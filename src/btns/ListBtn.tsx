import { ReactElement } from 'react';
import { ListIcon } from '../icons/ListIcon';
import './ListBtn.scss';
import { GridIcon } from '../icons/GridIcon';
import { useNavigate } from 'react-router-dom';

interface ListBtnProps {
  navTo: string;
  btn: 'table' | 'grid';
}

export const ListBtn = (props: ListBtnProps): ReactElement => {
  const navigate = useNavigate();
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e): undefined => {
    e.preventDefault();
    navigate(props.navTo);
    return undefined;
  };
  return (
    <>
      <button className="list-btn" onClick={clickHandler}>
        {props.btn === 'table' ? <ListIcon /> : <GridIcon />}
      </button>
    </>
  );
};
