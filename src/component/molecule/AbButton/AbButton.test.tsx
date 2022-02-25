import { render } from '@testing-library/react';
import { AbButton } from './AbButton';
import { abButtonProps } from './AbButton.props';
import { AbButtonProps } from './AbButton.type';

let props: AbButtonProps;

describe('component/molecule/AbButton', () => {
  describe('default', () => {
    beforeEach(() => {
      props = abButtonProps.default;
    });

    it('component/molecule/AbButton のテストケースを書くこと', () => {
      const view = render(<AbButton {...props} />);
      expect(true).toBe(true);
    });
  });
});
