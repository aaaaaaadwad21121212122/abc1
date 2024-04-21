import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";

export function TransferTon() {
  const { sender, connected } = useTonConnect();

  const [tonAmount, setTonAmount] = useState("1");
  const [tonRecipient, setTonRecipient] = useState(
    "EQAFqJnyqU5VdbSPZWxS98pfWG1HBnb_6SpXV42n2zvzbyHB"
  );

  return (
    <Card>
      <FlexBoxCol>
        <h5>Купить королев пчел. Цена 1 королевы - 1 TON</h5>
        <FlexBoxRow>
          <label>Количество </label>
          <Input
            style={{ marginRight: 5 }}
            type="number"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
          ></Input>
        </FlexBoxRow>

        <Button
          disabled={!connected}
          style={{ marginTop: 3 }}
          onClick={async () => {
            sender.send({
              to: Address.parse(tonRecipient),
              value: toNano(tonAmount),
            });
          }}
        >
          BUY
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
