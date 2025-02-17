# reef-knot

## 1.0.1

### Patch Changes

- Updated dependencies
  - @reef-knot/connect-wallet-modal@1.0.1

## 1.0.0

### Major Changes

- #### v1.0 is an update starting migration to wagmi
  - Update TS to 4.9.5, tslib to 2.5.0, rollup to 3.15.0
  - Update build config: generate ESM modules only, update tsconfig, change packages exports
  - Workaround styled-components ESM issue
  - Add wagmi dependency
  - Use wagmi controllers for all WalletConnect wallets (WC v2 support)
  - Add a modular wallet adapter API
  - Use a wallet adapter API with wagmi injected controller for Exodus wallet
  - Remove most of @lido-sdk dependencies
  - Cleanup and other minor changes

### Patch Changes

- Updated dependencies
  - @reef-knot/connect-wallet-modal@1.0.0
  - @reef-knot/web3-react@1.0.0
  - @reef-knot/core-react@1.0.0
  - @reef-knot/ui-react@1.0.0
  - @reef-knot/wallets-icons@1.0.0
  - @reef-knot/wallets-list@1.0.0

## 0.5.2

### Patch Changes

- Fix scrollbar padding and margin
- Support dark color theme
- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.5.2
  - ua-parser-js@1.0.33

## 0.5.1

### Patch Changes

- Improve the modal's scrollbar
- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.5.1

## 0.5.0

### Minor Changes

- Improve the modal's styles, rework scroll behavior

### Patch Changes

- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.5.0
  - @reef-knot/ui-react@0.2.0

## 0.4.1

### Patch Changes

- Add Zerion wallet detection
- Updated dependencies
  - @reef-knot/web3-react@0.3.0

## 0.4.0

### Minor Changes

- Add Zerion wallet

### Patch Changes

- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.4.0
  - @reef-knot/wallets-icons@0.2.0

## 0.3.0

### Minor Changes

- Add Metrics Events for clicks on wallets connection buttons

### Patch Changes

- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.3.0

## 0.2.0

### Minor Changes

- Add Metrics Events support

### Patch Changes

- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.2.0
  - @reef-knot/web3-react@0.2.0

## 0.1.2

### Patch Changes

- Fix subpackages versions in dependencies

## 0.1.1

### Patch Changes

- Add explanation for Ledger direct connection error
- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.1.1

## 0.1.0

### Minor Changes

- Support Trust Wallet browser extension

### Patch Changes

- Updated dependencies
  - @reef-knot/connect-wallet-modal@0.1.0
  - @reef-knot/web3-react@0.1.0
