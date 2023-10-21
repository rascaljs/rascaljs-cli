import { execCommand } from '../shared';

export function lintStaged() {
  execCommand('npx', ['lint-staged', '--config', '@rascaljs/cli/lint-staged'], { stdio: 'inherit' });
}
