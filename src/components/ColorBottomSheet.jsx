import {View, Text} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-select-bottom-list';
const ColorBottomSheet = () => {
  return (
    <View>
      <SelectList
        onSelect={(item, index) => setValue(item)}
        value={value}
        data={[
          'Change the world by being yourself – T.S Eliot',
          'Every moment is a fresh beginning. – T.S Eliot',
          'When nothing goes right, go left. – Anonymous',
          'Success is the child of audacity. – Benjamin Disraeli',
          'Never regret anything that made you smile. – Mark Twain',
          'Die with memories, not dreams. – Anonymous',
        ]}
        headerTitle={'Quotes'}
      />
    </View>
  );
};

export default ColorBottomSheet;
