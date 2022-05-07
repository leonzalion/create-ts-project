import fs from 'node:fs';
import path from 'node:path';
import { beforeAll, describe, expect, test } from 'vitest';

import { ProjectType } from '~/types/project.js';
import { checkCommon } from '~test/utils/check.js';
import {
	createProject,
	getProjectDestFolder,
	removeMyProject,
} from '~test/utils/project.js';

describe('creates valid Vite project', () => {
	beforeAll(async () => {
		removeMyProject(ProjectType.vite);
		await createProject(ProjectType.vite);
	});

	checkCommon(ProjectType.vite);

	test('should contain vite.config.ts', () => {
		const projectFolder = getProjectDestFolder(ProjectType.vite);
		expect(fs.existsSync(path.join(projectFolder, 'vite.config.ts'))).toBe(
			true
		);
	});
});
