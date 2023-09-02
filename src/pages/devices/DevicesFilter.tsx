import { ReactElement, useState } from 'react';
import { deviceList } from '../../uidb';
import './DevicesFilter.scss';
import { useSearchParams } from 'react-router-dom';

export const DevicesFilter = (): ReactElement => {
  const lines = deviceList.devices.reduce<Array<string>>((uniqueLines, currDevice) => {
    if (currDevice.line?.name && !uniqueLines.includes(currDevice.line.name)) {
      uniqueLines.push(currDevice.line.name);
    }
    return uniqueLines;
  }, []);
  const [blurred, setBlurred] = useState(true);
  const [activeResetBtn, setActiveResetBtn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
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
          onFocus={() => {
            setBlurred(false);
          }}
        >
          Filter
          {!blurred && (
            // Choices need to be mounted as children of the button so that blurring works well.
            // position:fixed helps the choices to display outside the button.
            <>
              <div className="devices-search-filter-options">
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
                            name={line}
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
