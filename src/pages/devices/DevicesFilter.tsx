import { ReactElement, useState } from 'react';
import './DevicesFilter.scss';

export const DevicesFilter = (): ReactElement => {
  const [blurred, setBlurred] = useState(false);
  return (
    <>
      <div className="device-search-filter-ctr">
        <button
          className="devices-search-filter"
          onBlur={(e: React.FocusEvent<HTMLButtonElement, Element>) => {
            // If the click was on something other than this element or its children, react to blur event.
            // Otherwise, child button clicks for results will not be processed before they are removed during the blur.
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setBlurred(true);
            }
          }}
          onFocus={() => setBlurred(false)}
        >
          Filter
        </button>
        {!blurred && (
          <>
            <div className="devices-search-filter-options">123</div>
          </>
        )}
      </div>
    </>
  );
};
