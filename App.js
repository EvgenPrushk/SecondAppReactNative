import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Group from "./components/Group/Group.jsx";

export default function App() {
  return (
    <Container>
      <Group title="14 september" items={{
        time: '15:30',
        diagnosis: 'Pulpit',
        user: {
          fullname: 'Alex Byi',
        }
      }} ></Group>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
