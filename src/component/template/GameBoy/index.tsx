import { GameBoy as GameBoyPresenter } from './GameBoy';
import { GameBoyProps } from './GameBoy.type';

const defaultProps: GameBoyProps = {};

const GameBoy: React.FC = () => <GameBoyPresenter {...defaultProps} />;

export { GameBoy }