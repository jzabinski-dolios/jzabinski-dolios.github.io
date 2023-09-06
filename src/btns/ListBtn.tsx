import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListIcon } from '../icons/ListIcon';
import { GridIcon } from '../icons/GridIcon';
import './ListBtn.scss';

interface ListBtnProps {
  navTo: string;
  btn: 'table' | 'grid';
}

/**
 * Navigation button used to navigate between list view and grid view.
 * @param props.navTo a string that describes the URL path to navigate when the button is clicked
 * @param props.btn which button to display. 'table' for a list icon, 'grid' for a little grid
 * @returns a ReactElement
 */
export const ListBtn = (props: ListBtnProps): ReactElement => {
  // React
  const navigate = useNavigate();
  // Local
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e): undefined => {
    e.preventDefault();
    navigate(props.navTo);
    return undefined;
  };
  // Template
  return (
    <>
      <button className="list-btn" onClick={clickHandler} aria-label="list">
        {props.btn === 'table' ? <ListIcon /> : <GridIcon />}
      </button>
    </>
  );
};
