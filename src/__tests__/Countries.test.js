import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Countries from '../components/Countries';

describe('Countries tests', () => {
  test('should render', () => {
    const data = {
      name: 'UK',
      TotalConfirmed: 1000,
    };
    const countries = render(
      <BrowserRouter>
        <Countries data={data} />
      </BrowserRouter>,
    );

    expect(countries).toMatchSnapshot();
  });
});
