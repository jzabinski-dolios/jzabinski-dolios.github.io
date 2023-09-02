import { useSearchParams } from 'react-router-dom';
import { ReactElement } from 'react';
import './DevicesSearchResults.scss';

export const DevicesSearch = (): ReactElement => {
  const [searchParams] = useSearchParams();
  return (
    <>
      {searchParams.get('search') && searchParams.get('search') !== '' && (
        <>
          <div className="devices-search-results">
            <div className="devices-search-result">{searchParams.get('search')}</div>
          </div>
        </>
      )}
    </>
  );
};
