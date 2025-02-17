import { Button } from 'reef-knot/ui-react';
import { useForceDisconnect } from 'reef-knot/web3-react';
import { useDisconnect } from 'wagmi';

const ConnectDisconnect = (props: { handleOpen: () => void }) => {
  const { handleOpen } = props;
  const { disconnect } = useForceDisconnect();
  const { disconnect: wagmiDisconnect } = useDisconnect();
  const handleDisconnect = () => {
    // disconnect wallets connected through web3-react connectors
    disconnect?.();
    // disconnect wallets connected through wagmi connectors
    wagmiDisconnect();
  };

  return (
    <>
      <Button
        style={{ width: '300px', alignSelf: 'center' }}
        onClick={handleOpen}
      >
        Connect wallet
      </Button>
      <Button
        style={{ width: '200px', marginTop: '10px', alignSelf: 'center' }}
        variant="text"
        onClick={() => {
          handleDisconnect();
        }}
      >
        Disconnect
      </Button>
    </>
  );
};

export default ConnectDisconnect;
