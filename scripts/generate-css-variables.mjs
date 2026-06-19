import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import prettier from 'prettier';
import ts from 'typescript';

const repoRoot = process.cwd();
const tokenSourceDir = path.resolve(repoRoot, 'src/theme/tokens');
const tempDir = path.resolve(repoRoot, '.token-css-build');
const outputFile = path.resolve(repoRoot, 'src/styles/css-variables.css');
const checkMode = process.argv.includes('--check');

const tokenFiles = [
  'primitive-tokens.ts',
  'semantic-tokens.ts',
  'antd-tokens.ts',
  'antd-component-tokens.ts',
  'index.ts',
];

const px = (input) => `${input}px`;
const value = (name, input) =>
  typeof input === 'number' && !name.startsWith('line-height') ? px(input) : input;

const section = (title, lines) => [
  `  /* -- ${title} ${'-'.repeat(Math.max(0, 68 - title.length))} */`,
  ...lines,
  '',
];

const varLine = (name, rawValue) => `  --wplus-${name}: ${value(name, rawValue)};`;

const transformImports = (code) => code.replace(/from '(\.\/[^']+)'/g, "from '$1.mjs'");

const transpileTokenFiles = () => {
  rmSync(tempDir, { force: true, recursive: true });
  mkdirSync(tempDir, { recursive: true });

  for (const file of tokenFiles) {
    const source = readFileSync(path.join(tokenSourceDir, file), 'utf8');
    const transpiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
        jsx: ts.JsxEmit.ReactJSX,
        importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
      },
      fileName: file,
    }).outputText;

    writeFileSync(
      path.join(tempDir, file.replace(/\.ts$/, '.mjs')),
      transformImports(transpiled),
      'utf8',
    );
  }
};

const generate = async () => {
  transpileTokenFiles();

  try {
    const primitive = await import(pathToFileURL(path.join(tempDir, 'primitive-tokens.mjs')));
    const semantic = await import(pathToFileURL(path.join(tempDir, 'semantic-tokens.mjs')));
    const { antdComponentTokens } = await import(
      pathToFileURL(path.join(tempDir, 'antd-component-tokens.mjs'))
    );

    const { wplusSpacing } = primitive;
    const alertTokens = antdComponentTokens.Alert ?? {};

    const lines = [
      '/* ==========================================================================',
      ' * W+ Design System - CSS Custom Properties',
      ' * Generated from src/theme/tokens/. Do not edit by hand.',
      ' * Run `pnpm tokens:css` to update, or `pnpm tokens:css:check` in CI.',
      ' * ========================================================================== */',
      '',
      ':root {',
      ...section(
        'Brand Colors',
        Object.entries(primitive.BRAND_COLORS).map(([key, tokenValue]) =>
          varLine(`brand-${key.replace('brand', '')}`, tokenValue),
        ),
      ),
      ...section('Primary Colors', [
        varLine('color-primary', 'var(--wplus-brand-6)'),
        varLine('color-primary-hover', 'var(--wplus-brand-5)'),
        varLine('color-primary-active', 'var(--wplus-brand-7)'),
      ]),
      ...section('Action Colors', [
        varLine('color-button-primary', semantic.BUTTON_COLOR_PRIMARY),
        varLine('color-button-primary-hover', semantic.BUTTON_COLOR_PRIMARY_HOVER),
        varLine('color-button-primary-active', semantic.BUTTON_COLOR_PRIMARY_ACTIVE),
        varLine('color-button-secondary-gold', 'var(--wplus-brand-6)'),
        varLine('color-link', semantic.BUTTON_COLOR_LINK),
        varLine('color-link-hover', semantic.BUTTON_COLOR_LINK_HOVER),
        varLine('color-link-active', semantic.BUTTON_COLOR_LINK_ACTIVE),
      ]),
      ...section('Status Colors', [
        varLine('color-success', semantic.COLOR_SUCCESS),
        varLine('color-warning', semantic.COLOR_WARNING),
        varLine('color-error', semantic.COLOR_ERROR),
        varLine('color-info', 'var(--wplus-color-link)'),
      ]),
      ...section('Text Colors', [
        varLine('color-text-heading', semantic.COLOR_TEXT_HEADING),
        varLine('color-text-body', semantic.COLOR_TEXT),
        varLine('color-text-secondary', semantic.COLOR_TEXT_SECONDARY),
        varLine('color-text-disabled', semantic.COLOR_TEXT_DISABLED),
        varLine('color-text-inverse', semantic.PAGE_HEADER_WHITE),
      ]),
      ...section('Background Colors', [
        varLine('color-bg-page', semantic.COLOR_BG_BASE),
        varLine('color-bg-container', semantic.COLOR_BG_CONTAINER),
        varLine('color-bg-module', semantic.COLOR_BG_MODULE),
        varLine('color-bg-table-header', semantic.COLOR_TABLE_HEADER_BG),
        varLine('color-bg-mask', semantic.COLOR_BG_MASK),
        varLine('color-bg-mask-drawer', 'rgba(0, 0, 0, 0.45)'),
        varLine('color-bg-spotlight', semantic.COLOR_BG_SPOTLIGHT),
        varLine('color-bg-success', semantic.COLOR_BG_SUCCESS),
        varLine('color-bg-error', semantic.COLOR_BG_ERROR),
        varLine('color-bg-info', semantic.COLOR_BG_INFO),
        varLine('color-bg-warning', semantic.COLOR_BG_WARNING),
        varLine('color-bg-brand', 'var(--wplus-brand-1)'),
        varLine('color-alert-success-bg', alertTokens.colorSuccessBg),
        varLine('color-alert-info-bg', alertTokens.colorInfoBg),
        varLine('color-alert-warning-bg', alertTokens.colorWarningBg),
      ]),
      ...section('Navigation Colors', [
        varLine('color-nav-top-bg', primitive.COLOR_HEADER_START),
        varLine('color-nav-top-text', 'rgba(255, 255, 255, 0.65)'),
        varLine('color-nav-top-text-selected', '#ffebae'),
        varLine('color-nav-dark-text', 'rgba(255, 255, 255, 0.75)'),
        varLine('color-nav-side-text', 'var(--wplus-color-text-body)'),
        varLine('color-nav-side-text-hover', semantic.BUTTON_COLOR_PRIMARY),
        varLine('color-nav-side-text-selected', semantic.BUTTON_COLOR_PRIMARY),
        varLine('color-nav-side-bg-selected', 'var(--wplus-brand-1)'),
        varLine('color-nav-side-indicator', semantic.BUTTON_COLOR_PRIMARY),
      ]),
      ...section('Borders', [
        varLine('color-border', semantic.COLOR_BORDER),
        varLine('color-border-strong', 'rgba(0, 0, 0, 0.25)'),
        varLine('color-split', semantic.COLOR_SPLIT),
        varLine('color-split-light', '#f0f0f0'),
        varLine('color-split-footer', '#e8e8e8'),
      ]),
      ...section('Radii', [
        varLine('radius-xs', primitive.BORDER_RADIUS_XS),
        varLine('radius-sm', primitive.BORDER_RADIUS),
        varLine('radius-md', primitive.SURFACE_BORDER_RADIUS),
        varLine('radius-lg', primitive.LAYER_BORDER_RADIUS),
        varLine('radius-round', primitive.BORDER_RADIUS_XL),
      ]),
      ...section(
        'Spacing',
        Object.entries({
          xs: wplusSpacing.space4,
          sm: wplusSpacing.space8,
          md: wplusSpacing.space12,
          lg: wplusSpacing.space16,
          xl: wplusSpacing.space20,
          xxl: wplusSpacing.space24,
          xxxl: wplusSpacing.space32,
        }).map(([name, tokenValue]) => varLine(`space-${name}`, tokenValue)),
      ),
      ...section('Shadows', [
        varLine('shadow-hover', primitive.BOX_SHADOW_HOVER),
        varLine('shadow-default', primitive.BOX_SHADOW_DEFAULT),
        varLine('shadow-modal', primitive.BOX_SHADOW_MODAL),
        varLine('shadow-tooltip', primitive.BOX_SHADOW_TOOLTIP),
        varLine('shadow-header', primitive.BOX_SHADOW_HEADER),
      ]),
      ...section('Layout Sizes', [
        varLine('header-height', wplusSpacing.topNavHeight),
        varLine('sidebar-width', wplusSpacing.sidebarWidth),
      ]),
      ...section('Control Sizes', [
        varLine('control-height', wplusSpacing.searchControlHeight),
        varLine('control-height-sm', 24),
        varLine('control-height-lg', 40),
      ]),
      ...section('Typography', [
        varLine('font-family', primitive.FONT_FAMILY),
        varLine('font-size-base', primitive.FONT_SIZE_BASE),
        varLine('font-size-sm', primitive.FONT_SIZE_SM),
        varLine('font-size-lg', primitive.FONT_SIZE_LG),
        varLine('font-size-xl', primitive.FONT_SIZE_XL),
        varLine('line-height-base', 22 / 14),
        varLine('line-height-lg', 24 / 16),
      ]),
      ...section('Motion', [
        varLine('transition-fast', '0.1s ease'),
        varLine('transition-normal', '0.2s ease'),
        varLine('transition-slow', '0.3s ease'),
        varLine('easing-enter', 'cubic-bezier(0.34, 0.69, 0.1, 1)'),
      ]),
      '}',
      '',
    ];

    return lines.join('\n');
  } finally {
    rmSync(tempDir, { force: true, recursive: true });
  }
};

const prettierConfig = await prettier.resolveConfig(outputFile);
const generated = await prettier.format(await generate(), {
  ...prettierConfig,
  filepath: outputFile,
});
const current = readFileSync(outputFile, 'utf8');

if (checkMode) {
  if (current !== generated) {
    throw new Error('src/styles/css-variables.css is out of date. Run `pnpm tokens:css`.');
  }

  console.log('CSS variables are up to date.');
} else {
  writeFileSync(outputFile, generated, 'utf8');
  console.log(`Generated ${path.relative(repoRoot, outputFile)}.`);
}
