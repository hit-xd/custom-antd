import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const cssExports = ['./index.css', './dist/index.css'];
const expectedCssExportTarget = './dist/index.css';
const expectedPackedCssFile = 'package/dist/index.css';
const expectedPackedManifestFile = 'package/package.json';

const pnpmCli = process.env.npm_execpath;

if (!pnpmCli) {
  throw new Error('package:check must be run through pnpm.');
}

const packDir = path.resolve('.pack-check');

rmSync(packDir, { force: true, recursive: true });
mkdirSync(packDir, { recursive: true });

try {
  execFileSync(process.execPath, [pnpmCli, 'pack', '--pack-destination', packDir], {
    stdio: 'pipe',
  });

  const tarballs = readdirSync(packDir).filter((file) => file.endsWith('.tgz'));

  if (tarballs.length !== 1) {
    throw new Error(
      `Expected exactly one packed tarball, found ${tarballs.length}:\n${tarballs
        .map((file) => `- ${file}`)
        .join('\n')}`,
    );
  }

  const tarballPath = path.join(packDir, tarballs[0]);
  const packedFiles = new Set(
    execFileSync('tar', ['-tf', tarballPath], {
      encoding: 'utf8',
    })
      .split(/\r?\n/)
      .filter(Boolean),
  );

  const requiredFiles = [expectedPackedManifestFile, expectedPackedCssFile];
  const missingFiles = requiredFiles.filter((file) => !packedFiles.has(file));

  if (missingFiles.length > 0) {
    throw new Error(
      `Package is missing required files:\n${missingFiles.map((file) => `- ${file}`).join('\n')}`,
    );
  }

  const packedManifest = JSON.parse(
    execFileSync('tar', ['-xOf', tarballPath, expectedPackedManifestFile], {
      encoding: 'utf8',
    }),
  );

  const invalidCssExports = cssExports.filter(
    (cssExport) => packedManifest.exports?.[cssExport] !== expectedCssExportTarget,
  );

  if (invalidCssExports.length > 0) {
    throw new Error(
      `Package CSS exports must point to ${expectedCssExportTarget}:\n${invalidCssExports
        .map(
          (cssExport) => `- ${cssExport}: ${JSON.stringify(packedManifest.exports?.[cssExport])}`,
        )
        .join('\n')}`,
    );
  }

  const indexCss = execFileSync('tar', ['-xOf', tarballPath, expectedPackedCssFile], {
    encoding: 'utf8',
  });

  const requiredCssSnippets = [
    'antd/dist/reset.css',
    '--wplus-',
    'border-bottom: 1px solid',
    'border-top: 1px solid',
  ];

  const missingCssSnippets = requiredCssSnippets.filter((snippet) => !indexCss.includes(snippet));

  if (missingCssSnippets.length > 0) {
    throw new Error(
      `Package CSS is missing required content:\n${missingCssSnippets
        .map((snippet) => `- ${snippet}`)
        .join('\n')}`,
    );
  }

  console.log('Package CSS export is publishable.');
} finally {
  rmSync(packDir, { force: true, recursive: true });
  rmSync(path.resolve('.pack-inspect'), { force: true, recursive: true });
}
