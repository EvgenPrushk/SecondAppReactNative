import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
// import Group from "./components/Group/Group";

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 september</GroupTitle>
        <GroupItem>
          <Avatar
            source={{
              uri: "https://sun1.cosmostv-by-minsk.userapi.com/s/v1/ig2/ehk_q82174BxFAPCw5hUg2c-KQTU4BqYPFnEn1KffZ2T4s69cXjfWRkbah7mqLHt9bZ2GYs5hp6IZvFXqhZw1Vzb.jpg?size=100x0&quality=96&crop=0,46,450,450&ava=1",
            }}
          ></Avatar>
          <View style={{ flex: 1 }}>
            <FullName>Elena Prekrasnya</FullName>
            <GrayText>removal of a tooth</GrayText>
          </View>
          <GroupDate active>12:30</GroupDate>
        </GroupItem>

        <GroupItem>
          <Avatar
            source={{
              uri: "https://sun2.cosmostv-by-minsk.userapi.com/s/v1/if2/nyPmdFSh4ev6A8VUHY0X1QcDbIIBC6AbqRS729ENaNy0-uyQKAdreI8ZjDmJE-vO_TqwCBwNWjMua4lnuSPhaRkz.jpg?size=50x0&quality=96&crop=697,175,758,758&ava=1",
            }}
          ></Avatar>
          <View style={{ flex: 1 }}>
            <FullName>Evgen Prushak</FullName>
            <GrayText>removal of a tooth</GrayText>
          </View>
          <GroupDate active>14:00</GroupDate>
        </GroupItem>
      </Group>
    </Container>
  );
}

const GroupDate = styled.Text`
  background: ${(props) => (props.active ? "#2A86FF" : "#e9f5ff")};
  color: ${(props) => (props.active ? "#fff" : "#4294ff")};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const GroupItem = styled.View`
  align-items: center;
  padding: 20px 0;
  flex-direction: row;
  border-bottom-color: #f3f3f3;
`;

const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const Group = styled.View`
  padding: 0 20px;
`;

const Container = styled.Text`
  flex: 1;
  margin-top: 50px;
`;
