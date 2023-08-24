import React, { useState } from 'react';
import { Card, CardTitle, Container, Divider, InputArea } from './styles';
import { Title } from '../../components/Title';
import { Description } from '../../components/Description';
import { Add } from '../../components/Add';
import { Filter } from '../../components/Filter';
import { FlatList, Text, Button } from 'react-native';

export default function Home() {
  const [publish, setPublish] = useState([]);
  const [taskText, setTaskText] = useState('');

  function handlePublish() {
    if (taskText.trim() !== '') {
      setPublish([...publish, taskText]);
      setTaskText('');
    }
  }

  const handleTaskChange = text => {
    setTaskText(text);
  };

  return (
    <Container>
      <Title title="Atividade de Athos Pugliese" />     
      <InputArea>
        <Filter value={taskText} onChange={handleTaskChange} />
        <Add onPress={handlePublish} />
      </InputArea>
       <Divider />
      <FlatList
        data={publish.filter(task => task !== '')}
        renderItem={({ item }) =><Card><CardTitle>{item}</CardTitle></Card>
      }
        keyExtractor={(item, index) => index.toString()}
      />
    <Description description={` ${publish.filter(task => task !== '').length} Tarefas`} />
    </Container>
  );
}
