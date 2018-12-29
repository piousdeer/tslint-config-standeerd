module.exports = {
  extends: ['tslint-config-standard'],
  rules: {
    'adjacent-overload-signatures': true,
    'align': {
      options: ['parameters', /* 'arguments', */ 'statements', 'members', 'elements']
    },
    'array-type': {
      options: ['array']
    },
    'arrow-return-shorthand': true,
    'ban-comma-operator': true,
    'ban-types': {
      options: [
        [
          'Object',
          'Avoid using the `Object` type. Did you mean `object`?'
        ],
        /* [
          'Array',
          'Avoid using the `Array` type. Prefer a specific array type, like `number[]`.'
        ], */
        [
          'Function',
          'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
        ],
        [
          'Boolean',
          'Avoid using the `Boolean` type. Did you mean `boolean`?'
        ],
        [
          'Number',
          'Avoid using the `Number` type. Did you mean `number`?'
        ],
        [
          'String',
          'Avoid using the `String` type. Did you mean `string`?'
        ],
        [
          'Symbol',
          'Avoid using the `Symbol` type. Did you mean `symbol`?'
        ]
      ]
    },
    'callable-types': true,
    /* 'file-name-casing': {
      options: 'kebab-case'
    }, */
    'function-constructor': true,
    'import-spacing': true,
    'interface-over-type-literal': true,
    /* 'member-access': true, */
    'member-ordering': {
      options: {
        order: 'statics-first'
      }
    },
    'no-bitwise': true,
    'no-construct': true,
    'no-duplicate-super': true,
    'no-debugger': true,
    'no-duplicate-switch-case': true,
    'no-inferrable-types': true,
    /* 'no-magic-numbers': true, */
    'no-misused-new': true,
    'no-parameter-reassignment': true,
    'no-reference': true,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-unbound-method': true,
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-type-assertion': true,
    'no-unused-expression': {
      options: ['allow-tagged-template']
    },
    'no-void-expression': {
      options: ['ignore-arrow-function-shorthand']
    },
    'number-literal-format': true,
    'object-literal-key-quotes': {
      options: ['consistent']
    },
    'object-literal-shorthand': true,
    'only-arrow-functions': {
      options: ['allow-named-functions']
    },
    'prefer-conditional-expression': true,
    'prefer-const': true,
    'prefer-for-of': true,
    'prefer-method-signature': true,
    'prefer-object-spread': true,
    'prefer-template': {
      options: ['allow-single-concat']
    },
    'strict-type-predicates': true,
    'unified-signatures': true,
    'unnecessary-constructor': true,
    'use-default-type-parameter': true
  }
}
