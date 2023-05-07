import React from 'react'
import {Text , View , TouchableOpacity} from 'react-native'
import { Colors } from '../../constants/colors'


const Button = ({title , color }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        padding: 15,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#e79115',
        margin:10,
      }}>
      <Text
        style={{
          color: Colors.LIGHT_GREY,
          textAlign: 'center',
          fontWeight: '800',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;