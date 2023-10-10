import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './components/Header';
import Task from './components/Task';
import ModalTask from './components/ModalTask';
import ButtonAdd from './components/ButtonAdd';

import { ScrollView, LogBox, Text, TouchableOpacity } from 'react-native';


export default function App() {
  LogBox.ignoreAllLogs()
  
  const [tasks, setTasks] = useState([])

  const [modal, setModal] = useState(true)

  const [task, setTask] = useState('')

  let [fontsLoaded] = useFonts({
    Lato_400Regular
  })

  useEffect(()=>{      
      (async () => {
        try {
          let currentTasks = await AsyncStorage.getItem('tasks');
          if(currentTasks == null)
          setTasks([]);
          else
          setTasks(JSON.parse(currentTasks));
        } catch (error) {
          // Error saving data
        }
      })()
      
  },[])

  const taskDelete = (id) => {
    alert('Tarefa com id: ' + id + ' foi deletada com sucesso!')

    let newTasks = tasks.filter((val) => {
      return val.id != id
    })

    setTasks(newTasks);

    (async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      } catch (error) {
        // Error saving data
      }
    })()
  }

  const addModal = (modal) => {
    setModal(!modal)

    let id = 0
    if(tasks.length > 0){
      id = tasks[tasks.length-1].id + 1
    }

    let currentTask = {
      id: id,
      task: task
    }

    setTasks([...tasks, currentTask]);

    (async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify([...tasks,currentTask]));
      } catch (error) {
        // Error saving data
      }
    })()
  }

  const setCurrentTask = (text) => {
    setTask(text)
  }
  
  return (
    <ScrollView style={{flex:1}}>
      <StatusBar hidden/>
      <Header />
      <ModalTask 
        modal={modal}
        handlePress={addModal}
        handleChangeText={setCurrentTask}
      />
      {
       tasks.map((val) => {
        return (
          <Task 
            desc={val.task}
            id={val.id}
            handlePress={taskDelete}
            key={val.id}
          />
        )
       }) 
      }
      <ButtonAdd handlePress={() => setModal(true)}/>
    </ScrollView>
  );
}