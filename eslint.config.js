import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/no-unused-vars': 'warn',
      'no-unused-vars': ['error', { varsIgnorePattern: '^_+$' }],
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          // ignoreWhenNoAttributes: true,
          // ignoreWhenEmpty: true,
          ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
          // externalIgnores: [],
        },
      ],
    },
  },
];
