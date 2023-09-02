import { useSearchParams } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ChangeEvent, ReactElement, useState } from 'react';
import { DevicesSearchResults } from './DevicesSearchResults';
import './DevicesSearch.scss';

export const DevicesSearch = (): ReactElement => {
  const [, setSearchParams] = useSearchParams();
  const [blurred, setBlurred] = useState(false);
  return (
    <>
      <div
        className="devices-search"
        onBlur={(e) => setBlurred(true)}
        onFocus={() => setBlurred(false)}
      >
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
        {!blurred && (
          <>
            <DevicesSearchResults />
          </>
        )}
      </div>
    </>
  );
};
