import { FC, useCallback } from 'react';
import { useConnectorCoinbase } from '@reef-knot/web3-react';
import { Coinbase } from '@reef-knot/wallets-icons/react';
import { ConnectWalletProps } from './types';
import { ConnectButton } from '../components';

const ConnectCoinbase: FC<ConnectWalletProps> = (props) => {
  const { onConnect, onBeforeConnect, metrics, ...rest } = props;
  const onConnectCoinbase =
    metrics?.events?.connect?.handlers.onConnectCoinbase;
  const onClickCoinbase = metrics?.events?.click?.handlers.onClickCoinbase;
  const { connect } = useConnectorCoinbase({
    onConnect: () => {
      onConnect?.();
      onConnectCoinbase?.();
    },
  });

  const handleConnect = useCallback(async () => {
    onBeforeConnect?.();
    onClickCoinbase?.();

    await connect();
  }, [connect, onBeforeConnect, onClickCoinbase]);

  return (
    <ConnectButton
      {...rest}
      iconSrcOrReactElement={<Coinbase />}
      onClick={handleConnect}
    >
      Coinbase
    </ConnectButton>
  );
};

export default ConnectCoinbase;
