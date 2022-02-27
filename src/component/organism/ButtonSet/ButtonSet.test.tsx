import { render } from '@testing-library/react';
import { ButtonSet, baseId } from './ButtonSet';
import { buttonSetProps } from './ButtonSet.props';
import { ButtonSetProps } from './ButtonSet.type';

let props: ButtonSetProps;

describe('component/organism/ButtonSet', () => {
  describe('default', () => {
    beforeEach(() => {
      props = buttonSetProps.default;
    });

    it('component/organism/ButtonSet のテストケースを書くこと', () => {
      const view = render(<ButtonSet {...props} />);
      expect(true).toBe(true);
    });
  });
});