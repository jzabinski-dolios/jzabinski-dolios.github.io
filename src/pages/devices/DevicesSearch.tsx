import { useSearchParams } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';
import { DevicesSearchResults } from './DevicesSearchResults';
import './DevicesSearch.scss';
import { effectTiming, fadeAway } from './devicesUtilities';

export const DevicesSearch = (): ReactElement => {
  const [, setSearchParams] = useSearchParams();
  const [blurred, setBlurred] = useState(false);
  const srchRes = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        className="devices-search"
        onBlur={async (e: React.FocusEvent<HTMLDivElement, Element>) => {
          // If the click was on something other than this element or its children, react to blur event.
          // Otherwise, child button clicks for results will not be processed before they are removed during the blur.
          if (!e.currentTarget.contains(e.relatedTarget)) {
            await new Promise<void>((resolve) => {
              // Animate away any search results. (Results stay in the DOM for a second longer: see below.)
              srchRes.current?.animate(fadeAway, effectTiming);
              setTimeout(() => {
                // Use blurred to tell React to remove results from the DOM
                setBlurred(true);
                resolve();
              }, 1000);
            });
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
            <DevicesSearchResults ref={srchRes} />
          </>
        )}
      </div>
    </>
  );
};
