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
        onBlur={(e: React.FocusEvent<HTMLDivElement, Element>) => {
          // If the click was on something other than this element or its children, react to blur event.
          // Otherwise, child button clicks for results will not be processed before they are removed during the blur.
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setBlurred(true);
          }
        }}
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
