import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles';

export default function TaskManager() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleEditTask = (index) => {
    Alert.prompt(
      'Edit Task',
      'Enter new task name:',
      (newTask) => {
        if (newTask !== '' && newTask !== null) {
          const newTaskList = [...taskList];
          newTaskList[index] = newTask;
          setTaskList(newTaskList);
        }
      },
      'plain-text',
      taskList[index]
    );
  };

  const handleDeleteTask = (index) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete', onPress: () => {
            const newTaskList = [...taskList];
            newTaskList.splice(index, 1);
            setTaskList(newTaskList);
          }, style: 'destructive'
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Task Management</Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <MaterialIcons name="add" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.taskList}>
        {taskList.map((item, index) => (
          <View style={styles.taskContainer} key={index}>
            <Text style={styles.task}>{item}</Text>
            <View style={styles.taskButtons}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEditTask(index)}>
                <MaterialIcons name="edit" size={24} color="#66CCCC" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTask(index)}>
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
