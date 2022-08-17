import React from 'react';
import ReactDOM from 'react-dom/client';
import { MultiDropdown } from './components/MultiDropdown/MultiDropdown';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MultiDropdown
      options={[
        { key: 'msk', value: 'Москва' },
        { key: 'spb', value: 'Санкт-Петербург' },
        { key: 'ekb', value: 'Екатеринбург' },
      ]}
      value={[
        { key: 'msk', value: 'Москва' },
        { key: 'spb', value: 'Санкт-Петербург' },
        { key: 'ekb', value: 'Екатеринбург' },]}
      onChange={(value) => {console.log(value)}}
      pluralizeOptions={(values) => values.map(it => it.value).join(',')}
    />
  </React.StrictMode>
);
