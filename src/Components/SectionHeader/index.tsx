import React from 'react';
import Styles from './SectionHeader.module.css';
import Text from '../Text';
import Title from '../Title';

interface sharedHeaderProps {
  headerTitle: string;
  headerDescription: string;
  color?: 'black' | 'white' | 'primary';
  width?: 'normal' | 'small';
}

function SharedHeader({
  color = 'primary',
  width = 'normal',
  headerTitle,
  headerDescription
}: sharedHeaderProps) {
  const sharedHeaderClassName =
    width === 'normal' ? Styles.shared_header_container : Styles.small_shared_header_container;
  return (
    <div className={sharedHeaderClassName}>
      <Title alignTitle="center" color={color}>
        {headerTitle}
      </Title>
      <Text alignText="center" size="medium" color={color}>
        {headerDescription}
      </Text>
    </div>
  );
}

export default SharedHeader;
