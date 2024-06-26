import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: 'transparent';

  @media (prefers-color-scheme: dark) {
    background-color: 'transparent';
    color: white;
  }
  min-height: 10vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
          </FlexBoxRow>
          <TransferTon />
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
