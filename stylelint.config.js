/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', '@stylistic/stylelint-config'],
  rules: {
    'string-no-newline': true,
    'at-rule-empty-line-before': 'always',
    'rule-empty-line-before': 'always',
    'selector-class-pattern': '^[a-z0-9]+(?:_[a-z0-9]+)*$',
  },
}
