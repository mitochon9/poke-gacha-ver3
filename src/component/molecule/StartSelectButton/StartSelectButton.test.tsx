import { render } from '@testing-library/react';
import { StartSelectButton, baseId } from './StartSelectButton';
import { startSelectButtonProps } from './StartSelectButton.props';
import { StartSelectButtonProps } from './StartSelectButton.type';

let props: StartSelectButtonProps;

describe('component/molecule/StartSelectButton', () => {
  describe('default', () => {
    beforeEach(() => {
      props = startSelectButtonProps.default;
    });

    it('component/molecule/StartSelectButton のテストケースを書くこと', () => {
      const view = render(<StartSelectButton {...props} />);
      expect(true).toBe(true);
    });
  });
});