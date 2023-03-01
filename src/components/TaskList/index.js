import { View, Text } from "react-native";

import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import * as S from "./style";
export default function TaskList({ data }) {
  const [checked, setChecked] = useState(data.status);
  return (
    <S.Container>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
        color={"#323232"}
      />
      <View style={{ flex: 1 }}>
        <S.Description
          style={{ textDecorationLine: checked ? "line-through" : null }}
        >
          {data.desc}
        </S.Description>
        <S.Date style={{ textDecorationLine: checked ? "line-through" : null }}>
          {data.date}
        </S.Date>
      </View>
    </S.Container>
  );
}
