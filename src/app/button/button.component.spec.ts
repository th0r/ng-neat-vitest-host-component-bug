import {ButtonComponent} from './button.component';
import {
  createHostFactory,
  SpectatorHost
} from '@ngneat/spectator/vitest';
import {ButtonModule} from './button-module';

describe('ButtonComponent', () => {
  let spectator: SpectatorHost<ButtonComponent>;
  const createComponentHost = createHostFactory({
    component: ButtonComponent,
    imports: [ButtonModule],
    declareComponent: false
  });

  it('should create', () => {
    spectator = createComponentHost('<app-button>');

    expect(spectator.query('button')).toExist();
  });
});
