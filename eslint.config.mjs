import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ['eslint.config.mjs'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single'],
      'object-curly-spacing': ['error', 'always'],
      'max-len': ['error', { code: 150 }],
      semi: ['error', 'never'],
    },
  },
]

export default eslintConfig
