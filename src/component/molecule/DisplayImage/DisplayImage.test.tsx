import { render } from '@testing-library/react';
import { DisplayImage, baseId } from './DisplayImage';
import { displayImageProps } from './DisplayImage.props';
import { DisplayImageProps } from './DisplayImage.type';

let props: DisplayImageProps;

describe('component/molecule/DisplayImage', () => {
  describe('default', () => {
    beforeEach(() => {
      props = displayImageProps.default;
    });

    it('component/molecule/DisplayImage のテストケースを書くこと', () => {
      const view = render(<DisplayImage {...props} />);
      expect(true).toBe(true);
    });
  });
});