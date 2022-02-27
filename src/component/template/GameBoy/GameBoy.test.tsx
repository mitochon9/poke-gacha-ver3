import { render } from '@testing-library/react';
import { GameBoy, baseId } from './GameBoy';
import { gameBoyProps } from './GameBoy.props';
import { GameBoyProps } from './GameBoy.type';

let props: GameBoyProps;

describe('component/template/GameBoy', () => {
  describe('default', () => {
    beforeEach(() => {
      props = gameBoyProps.default;
    });

    it('component/template/GameBoy のテストケースを書くこと', () => {
      const view = render(<GameBoy {...props} />);
      expect(true).toBe(true);
    });
  });
});