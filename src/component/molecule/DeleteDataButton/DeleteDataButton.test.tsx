import { render } from '@testing-library/react';
import { DeleteDataButton, baseId } from './DeleteDataButton';
import { deleteDataButtonProps } from './DeleteDataButton.props';
import { DeleteDataButtonProps } from './DeleteDataButton.type';

let props: DeleteDataButtonProps;

describe('component/molecule/DeleteDataButton', () => {
  describe('default', () => {
    beforeEach(() => {
      props = deleteDataButtonProps.default;
    });

    it('component/molecule/DeleteDataButton のテストケースを書くこと', () => {
      const view = render(<DeleteDataButton {...props} />);
      expect(true).toBe(true);
    });
  });
});