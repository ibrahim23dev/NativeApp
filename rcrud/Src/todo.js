// Todo.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add Task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

export default Todo;
