/**
 *  Stylelint Config
 */

module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-recommended', 'stylelint-config-standard'],
  rules: {

    'annotation-no-unknown': null,
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',

    'block-closing-brace-newline-after': 'always-multi-line',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',

    'block-no-empty': true,

    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    'color-hex-case': 'lower',
    'color-no-invalid-hex': true,

    'comment-empty-line-before': 'always',
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',

    'custom-property-pattern': null,

    'declaration-bang-space-after': 'never',

    'declaration-block-no-shorthand-property-overrides': true,

    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',

    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-before': 'never',

    'declaration-empty-line-before': 'never',

    'font-family-name-quotes': 'always-where-required',
    'function-calc-no-unspaced-operator': true,

    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never-single-line',

    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 5,

    'function-name-case': 'lower',
    'function-no-unknown': null,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    'length-zero-no-unit': true,

    'max-empty-lines': 10,
    'max-line-length': 180,
    'max-nesting-depth': 6,

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',

    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,

    'number-leading-zero': 'always',
    'number-max-precision': 7,
    'number-no-trailing-zeros': true,

    'property-case': 'lower',
    'property-no-unknown': true,

    'rule-empty-line-before': null,

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',

    'selector-class-pattern': null,

    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',

    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    'selector-max-empty-lines': 5,
    'selector-max-compound-selectors': 8,

    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',

    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': true,

    'selector-type-case': 'lower',
    'selector-type-no-unknown': null,

    'shorthand-property-no-redundant-values': true,

    'string-no-newline': true,
    'string-quotes': 'single',

    'unit-case': 'lower',
    'unit-no-unknown': true,

    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-no-vendor-prefix': true,

    'order/properties-alphabetical-order': true
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      plugins: ['stylelint-scss'],
      rules: {
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/partial-no-import': true,
        'scss/selector-no-redundant-nesting-selector': true
      }
    }
  ]
}
