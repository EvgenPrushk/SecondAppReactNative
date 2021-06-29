import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 September</GroupTitle>
        <GroupItem>
          <Avatar
            source={{
              uri: "https://sun2.cosmostv-by-minsk.userapi.com/s/v1/ig2/Dae-Ycgir2LQoT3UUclxGV0fseUveA4XgxMWFYNq0tgSIcrUHiugVv-I-nsNxb8d2j_KQRrrR1hD4vYIXEsg7QSr.jpg?size=100x0&quality=96&crop=0,189,716,716&ava=1",
            }}
          />
          <View style={{ flex: 1 }}>
            <FullName> Alena Ptushka</FullName>
            <GrayText> Pulpitis, remove tooth</GrayText>
          </View>
          <GroupData active>12:30</GroupData>
        </GroupItem>
        <GroupItem>
          <Avatar
            source={{
              uri: "https://sun2.cosmostv-by-minsk.userapi.com/s/v1/if2/nyPmdFSh4ev6A8VUHY0X1QcDbIIBC6AbqRS729ENaNy0-uyQKAdreI8ZjDmJE-vO_TqwCBwNWjMua4lnuSPhaRkz.jpg?size=50x0&quality=96&crop=697,175,758,758&ava=1",
            }}
          />
          <View style={{ flex: 1 }}>
            <FullName> Evgen Prushak</FullName>
            <GrayText> Inspestion</GrayText>
          </View>
          <GroupData active>13:00</GroupData>
        </GroupItem>
      </Group>
    </Container>
  );
}

const GroupData = styled.Text`
  background: ${(props) => (props.active ? " #2F86FF" : " #e9f5ff")};
  color: ${(props) => (props.active ? " #fff" : " #4294ff")};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`;

const GrayText = styled.Text`
  align-items: center;
  font-size: 16px;
  color: #8b979f;
`;

const FullName = styled.Text`
  font-weight: 800;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const Group = styled.View`
  padding: 0 20px;
`;

const GroupItem = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
