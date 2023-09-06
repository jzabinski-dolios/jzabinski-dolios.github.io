import { ReactElement, useRef, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { DataLoader } from '../../dataLoader';
import { effectTiming, fadeAway } from './devicesUtilities';
import './DevicesFilter.scss';

/**
 * A filter for the devices. Filters by product line.
 * @returns a ReactElement
 */
export const DevicesFilter = (): ReactElement => {
  // React
  const [blurred, setBlurred] = useState(true);
  const loader = useLoaderData() as DataLoader;
  const [activeResetBtn, setActiveResetBtn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterOptions = useRef<HTMLDivElement>(null);
  // Local properties
  const deviceList = loader.deviceList!;
  // Todo: This could be generated once, in the data loader, and provided to this element multiple times,
  // rather than generating it on every render.
  const lines = deviceList.devices.reduce<Array<string>>((uniqueLines, currDevice) => {
    // If the current device has a line and we haven't added it to our list yet, then include it.
    if (currDevice.line?.name && !uniqueLines.includes(currDevice.line.name)) {
      uniqueLines.push(currDevice.line.name);
    }
    return uniqueLines;
  }, []);
  // Local functions
  const updateFilters = (line: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    const action = (e.target as any).checked ? 'add' : 'remove';
    const rawFilters = searchParams.get('filters');
    let filters = rawFilters?.split(',') ?? [];
    if (action === 'add') {
      if (!filters.includes(line)) {
        filters.push(line);
      }
    } else {
      if (filters.includes(line)) {
        filters = filters.filter((filter) => filter !== line);
      }
    }
    const newFilter = filters.join(',');
    if (newFilter.length > 0) {
      if (activeResetBtn === false) {
        setActiveResetBtn(true);
      }
      searchParams.set('filters', newFilter);
    } else {
      if (activeResetBtn === true) {
        setActiveResetBtn(false);
      }
      searchParams.delete('filters');
    }
    setSearchParams(searchParams);
  };
  const filterSet = (line: string): boolean => {
    const rawFilters = searchParams.get('filters');
    const filters = rawFilters?.split(',') ?? [];
    return filters.includes(line);
  };
  const clearFilters = (): undefined => {
    searchParams.delete('filters');
    setSearchParams(searchParams);
    return undefined;
  };
  // Template
  return (
    <>
      <div className="device-search-filter-ctr">
        <button
          className="devices-search-filter"
          onBlur={async (e: React.FocusEvent<HTMLButtonElement, Element>) => {
            // If the click was on something other than this element or its children, react to blur event.
            // Otherwise, child button clicks for results will not be processed before they are removed during the blur.
            if (!e.currentTarget.contains(e.relatedTarget)) {
              await filterOptions.current?.animate(fadeAway, effectTiming).finished;
              setBlurred(true);
            }
          }}
          onFocus={() => {
            setBlurred(false);
          }}
        >
          Filter
          {!blurred && (
            // Choices need to be mounted as children of the button so that blurring works well.
            // position:fixed helps the choices to display outside the button.
            <>
              <div className="devices-search-filter-options" ref={filterOptions}>
                <div className="devices-search-filter-options-title">Product line</div>
                {lines.length > 0 && (
                  <>
                    <div className="device-search-filter-options-choices">
                      {lines.map((line) => (
                        <div className="device-search-filter-options-choice" key={line}>
                          <input
                            type="checkbox"
                            checked={filterSet(line)}
                            value={line}
                            id={line}
                            onChange={(e) => updateFilters(line, e)}
                          />
                          <label htmlFor={line}>{line}</label>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <div
                  className={`devices-search-filter-btn ${activeResetBtn ? 'active' : 'inactive'}`}
                  onClick={() => clearFilters()}
                >
                  Reset
                </div>
              </div>
            </>
          )}
        </button>
      </div>
    </>
  );
};
