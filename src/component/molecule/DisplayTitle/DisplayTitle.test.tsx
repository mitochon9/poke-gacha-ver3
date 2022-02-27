import { render } from '@testing-library/react';
import { DisplayTitle, baseId } from './DisplayTitle';
import { displayTitleProps } from './DisplayTitle.props';
import { DisplayTitleProps } from './DisplayTitle.type';

let props: DisplayTitleProps;

describe('component/molecule/DisplayTitle', () => {
  describe('default', () => {
    beforeEach(() => {
      props = displayTitleProps.default;
    });

    it('component/molecule/DisplayTitle のテストケースを書くこと', () => {
      const view = render(<DisplayTitle {...props} />);
      expect(true).toBe(true);
    });
  });
});