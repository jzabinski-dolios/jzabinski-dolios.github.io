import { ReactElement, useState } from 'react';
import { deviceList } from '../../uidb';
import './DevicesFilter.scss';

export const DevicesFilter = (): ReactElement => {
  const lines = deviceList.devices.reduce<Array<string>>((uniqueLines, currDevice) => {
    if (currDevice.line?.name && !uniqueLines.includes(currDevice.line.name)) {
      uniqueLines.push(currDevice.line.name);
    }
    return uniqueLines;
  }, []);
  const [blurred, setBlurred] = useState(true);
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
                        <>
                          <div className="device-search-filter-options-choice">
                            <input type="checkbox" value={line} name={line} />
                            <label htmlFor={line}>{line}</label>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </button>
      </div>
    </>
  );
};
