import React, { memo } from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import Icon from './Icon';
import { ButtonProps, IconButtonProps } from '../../constants/Types';

export const Button: React.FC<ButtonProps> = memo((props) => {
  const { btnInfo, textInfo, iconInfo, handleBtnClick, disabled } = props;

  return (
    <TouchableOpacity disabled={disabled}  onPress={handleBtnClick} style={[{ borderRadius: 5, padding: 15, borderColor: '#14678B', borderWidth: 0.7, flexDirection: 'row', width: '100%', marginTop: 10 }, btnInfo?.styles, disabled && {backgroundColor:'grey'}]}>
      <Icon type={iconInfo.type as any} name={iconInfo.name} size={iconInfo.size} color={iconInfo.color} />
      <View style={{ marginLeft: 5, justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'fontBold', color: textInfo?.color, fontSize: 11, textAlign: 'center' }} numberOfLines={1}>{textInfo?.text}</Text>
      </View>
    </TouchableOpacity>
  );
});

export const IconButton: React.FC<IconButtonProps> = memo((props) => {
  const { iconInfo, handleBtnClick } = props;
  
  return (
    <TouchableOpacity onPress={handleBtnClick}>
      <Icon type={iconInfo.type as any} name={iconInfo.name} size={iconInfo.size} color={iconInfo.color} />
    </TouchableOpacity>
  );
});