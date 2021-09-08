import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  ContentContainer,
  Content1,
  ContentItems,
  ContentH1,
} from './ContentElements';

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const contentToggle = (isOpen) => {
    if(isOpen){
      setIsOpen(false)
    }
  }

  return (
    <ContentContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Content1 onClick={contentToggle}>
        <ContentItems>
          <ContentH1>Refael dimri</ContentH1>
        </ContentItems>
      </Content1>
    </ContentContainer>
  );
};

export default Content;
