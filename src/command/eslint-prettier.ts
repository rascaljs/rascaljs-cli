import { execa } from 'execa';

export async function eslintPretter() {
  await execa('npx', ['eslint', '.', '--fix'], {
    stdio: 'inherit'
  });

  await execa('npx', ['ras', 'prettier-format'], {
    stdio: 'inherit'
  });
}
