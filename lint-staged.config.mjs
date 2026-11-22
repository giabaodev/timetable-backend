export default {
  '*.{js,jsx,ts,tsx}': ['oxlint --type-aware --fix', 'prettier --write'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
