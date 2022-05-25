import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';
import store from '../redux/configureStore';

import { fetchDataAction } from '../redux/covid/covid';

describe('Test for Home', () => {
  test('should render', () => {
    const homepage = render(
      <Provider store={store}>
        <HashRouter>
          <Home />
        </HashRouter>
      </Provider>,
    );
    expect(homepage).toMatchSnapshot();
  });

  it('should return an action with type FETCH_DATA', () => {
    const data = {
      dates: {
        '2022-05-22': {
          countries: {
            Afghanistan: {},
            info: {},
          },
        },
        metadata: {},
        total: {},
        updated_at: '2022-05-23 14:54UTC',
      },
    };
    const action = fetchDataAction(data);
    expect(action.type).toBe('covid/covid/FETCH_DATA');
  });
});
