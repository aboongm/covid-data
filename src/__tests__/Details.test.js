import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from '../components/Details';
import store from '../redux/configureStore';

describe('Test for Details', () => {
  test('should render', () => {
    const detailpage = render(
      <Provider store={store}>
        <HashRouter>
          <Details />
        </HashRouter>
      </Provider>,
    );
    expect(detailpage).toMatchSnapshot();
  });
});
