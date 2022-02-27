import { render } from '@testing-library/react';
import { Display, baseId } from './Display';
import { displayProps } from './Display.props';
import { DisplayProps } from './Display.type';

let props: DisplayProps;

describe('component/organism/Display', () => {
  describe('default', () => {
    beforeEach(() => {
      props = displayProps.default;
    });

    it('component/organism/Display のテストケースを書くこと', () => {
      const view = render(<Display {...props} />);
      expect(true).toBe(true);
    });
  });
});