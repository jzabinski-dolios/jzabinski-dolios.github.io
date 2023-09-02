import { ChangeEvent, ReactElement } from 'react';
import { ListBtn } from '../../btns/ListBtn';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import './Devices.scss';
import { useSearchParams } from 'react-router-dom';

export const Devices = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div className="devices">
        <div className="devices-subheader">
          <div className="devices-search">
            <div className="devices-search-layout">
              <div className="devices-search-attribs">
                <div className="devices-search-attribs-icon">
                  <SearchIcon />
                </div>
                <input
                  className="devices-search-attribs-input lato-regular-14"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    setSearchParams({ search: e.target.value });
                  }}
                  placeholder="Search"
                />
              </div>
            </div>
            {searchParams.get('search') && searchParams.get('search') !== '' && (
              <>
                <div className="devices-search-results">
                  <div className="devices-search-result">{searchParams.get('search')}</div>
                </div>
              </>
            )}
          </div>
          <ListBtn btn="table" navTo="../devices/list" />
          <ListBtn btn="grid" navTo="../devices/grid" />
        </div>
      </div>
    </>
  );
};
