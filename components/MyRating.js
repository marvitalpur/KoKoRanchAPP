import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {PotIcon} from '../assets/svgs/homeSvg';

export function CustomRating({maxRating, onRatingSelected}) {
  const [selectedRating, setSelectedRating] = useState(0);
  const handleRatingSelect = ratingValue => {
    setSelectedRating(ratingValue);
    onRatingSelected(ratingValue);
  };
  const ratingIcons = [];
  for (let i = 1; i <= maxRating; i++) {
    const iconColor = i <= selectedRating ? 'gold' : 'grey';
    ratingIcons.push(
      <TouchableOpacity key={i} onPress={() => handleRatingSelect(i)}>
        <View style={{padding: 1}}>
          <PotIcon />
        </View>

        {/* <Icon name="star" size={30} color={iconColor} /> */}
      </TouchableOpacity>,
    );
  }
  return <View style={styles.container}>{ratingIcons}</View>;
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
  },
});
