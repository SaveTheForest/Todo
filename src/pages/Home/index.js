import {
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";
import * as S from "./style";
import TaskList from "../../components/TaskList";
import { addNewTaskIcon } from "../../assets/icons";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      desc: "teste, teste,teste,teste,teste",
      date: "12:42 PM",
      status: true,
    },
    {
      desc: "teste, teste,teste,teste,teste",
      date: "12:42 PM",
      status: true,
    },
    {
      desc: "teste, teste,teste,teste,teste",
      date: "12:42 PM",
      status: false,
    },
    {
      desc: "teste, teste,teste,teste,teste",
      date: "12:42 PM",
      status: false,
    },
  ];

  return (
    <S.Container>
      <S.Tittle>Task</S.Tittle>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <TaskList data={item} />}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setModalVisible(false)}
        ></TouchableOpacity>
        <S.ContainerNewTask>
          <S.TextNewTask>New Task</S.TextNewTask>
          <TextInput
            placeholder="Type here!"
            placeholderTextColor={"#DDD"}
            style={{
              borderBottomColor: "#FFF",
              borderBottomWidth: 1.5,
              width: "90%",
              color: "#FFF",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
              marginTop: 30,
              marginRight: 10,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  marginHorizontal: 10,
                  fontSize: 16,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  marginHorizontal: 10,
                  fontSize: 16,
                }}
              >
                Salve
              </Text>
            </TouchableOpacity>
          </View>
        </S.ContainerNewTask>
      </Modal>
      <S.ButtonNewTask onPress={() => setModalVisible(true)}>
        {addNewTaskIcon}
      </S.ButtonNewTask>
    </S.Container>
  );
}
