import { useCallback, useState } from 'react';
import { Modal } from '@reef-knot/ui-react';
import {
  WalletsModalProps,
  ButtonsCommonProps,
  RequirementsData,
} from './types';
import { Terms } from '../Terms';
import { WalletsButtonsContainer } from './styles';
import { NOOP, useLocalStorage } from '../../helpers';

export function WalletsModal(props: WalletsModalProps): JSX.Element {
  const {
    onClose,
    shouldInvertWalletIcon = false,
    buttonsFullWidth = false,
    metrics,
    walletConnectProjectId,
    wagmiChains,
  } = props;

  const [termsChecked, setTermsChecked] = useLocalStorage(
    'reef-knot_terms-agree',
    false,
  );

  const handleTermsToggle = useCallback(() => {
    setTermsChecked((currentValue: boolean) => !currentValue);
  }, [setTermsChecked]);

  const [requirementsVisible, setRequirementsVisible] = useState(false);
  const [requirementsData, setRequirementsData] = useState<RequirementsData>(
    {},
  );

  const setRequirements = useCallback(
    (isVisible: boolean, reqData: RequirementsData = {}) => {
      setRequirementsVisible(isVisible);
      setRequirementsData(reqData);
    },
    [],
  );

  const buttonsCommonProps: ButtonsCommonProps = {
    wagmiChains,
    walletConnectProjectId,
    disabled: !termsChecked,
    onConnect: onClose,
    shouldInvertWalletIcon,
    setRequirements,
    metrics,
  };

  // pass-into function is cheap, so we're losing performance on useCallback here
  const hideRequirements = () => {
    setRequirements(false);
  };

  const handleClose = onClose || NOOP;

  const { icon: reqIcon, title: reqTitle, text: reqText } = requirementsData;

  return requirementsVisible ? (
    <Modal
      {...props} // the props are overridden here on purpose
      onClose={handleClose}
      onBack={hideRequirements}
      onExited={hideRequirements}
      center
      title={reqTitle}
      subtitle={reqText}
      titleIcon={reqIcon}
    />
  ) : (
    <Modal
      title="Connect wallet"
      {...props} // the props can be overridden by a library user
      center={false}
      onClose={handleClose}
    >
      <Terms
        onChange={handleTermsToggle}
        checked={termsChecked}
        metrics={metrics}
      />
      <WalletsButtonsContainer $buttonsFullWidth={buttonsFullWidth}>
        {props.children(buttonsCommonProps)}
      </WalletsButtonsContainer>
    </Modal>
  );
}
