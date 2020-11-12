import { memo, useState } from 'react';
import { Button, Modal, Form, Input } from 'antd'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useMutation, gql } from '@apollo/client';

import { GET_ALL_SONGS } from '../pages/Songs'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2194ff;
  align-items: flex-end;
  padding-bottom: 5px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 3rem;
`;

const StyledTitle = styled.h1`
  margin-bottom: -9.5px;
`;

const ADD_SONG = gql`
  mutation ADD_SONG(
    $title: String!,
    $cover: String!
  ) {
    addSong(title: $title, cover: $cover) {
      id,
      cover,
      title
    }
  }
`


export const PageHeader = memo(({ title }) => {

  const [showModal, setShowModal] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [coverValue, setCoverValue] = useState('');
  const [addSong] = useMutation(ADD_SONG);

  const onSubmit = async () => {
    await addSong({
      variables: { title: titleValue, cover: coverValue },
      refetchQueries: [{ query: GET_ALL_SONGS }]
    })
    setShowModal(false);
  }


  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <Button type="primary" onClick={() => setShowModal(true)}>Ajouter +</Button>
      <Modal
        title="Ajouter un morceau"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onOk={onSubmit}
        okText="Confirmer"
        cancelText="Annuler"
      >
        <Form {...layout}>
          <Form.Item
            label="Title"
            name="title"
          >
            <Input value={titleValue} onChange={e => setTitleValue(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Cover"
            name="cover"
          >
            <Input value={coverValue} onChange={e => setCoverValue(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  )
});

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};