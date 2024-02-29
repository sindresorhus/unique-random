import chalk from 'chalk';
import inRange from 'in-range';

export default function assertInRange(t, value, {start = 0, end}) {
	t.true(
		inRange(value, {start, end}),
		`${start} ${start <= value ? '≤' : chalk.red('≰')} ${chalk.yellow(value)} ${value <= end ? '≤' : chalk.red('≰')} ${end}`,
	);
}
