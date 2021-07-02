import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Group = ({ title, items }) => {
  <GroupBlock>
    <GroupTitle>{title}</GroupTitle>
    {items.map((item) => (
      <GroupItem>
        <Avatar
          source={{
            uri: item.user.avatar,
          }}
        />
        <View style={{ flex: 1 }}>
          <FullName>{item.user.fullname}</FullName>
          <GrayText>{item.diagnosis}</GrayText>
        </View>
        <GroupData>{item.time}</GroupData>
      </GroupItem>
    ))}
  </GroupBlock>;
};

Group: defaultProps = {
  groupTitle: "Untitled",
  items: [],
};

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

const GroupBlock = styled.View`
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
