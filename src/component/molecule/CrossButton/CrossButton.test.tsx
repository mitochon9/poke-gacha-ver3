import { render } from '@testing-library/react';
import { CrossButton, baseId } from './CrossButton';
import { crossButtonProps } from './CrossButton.props';
import { CrossButtonProps } from './CrossButton.type';

let props: CrossButtonProps;

describe('component/molecule/CrossButton', () => {
  describe('default', () => {
    beforeEach(() => {
      props = crossButtonProps.default;
    });

    it('component/molecule/CrossButton のテストケースを書くこと', () => {
      const view = render(<CrossButton {...props} />);
      expect(true).toBe(true);
    });
  });
});