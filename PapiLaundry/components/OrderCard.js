import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';

export const OrderCard = ({product, onRatePress}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>RP. {product.price}</Text>
        <Text style={styles.statusDelivery}>{product.status}</Text>
        <View style={styles.ratingContainer}>
          <TouchableOpacity  onPress={onRatePress} >
            <View style={styles.star}>
              <Text>Rate</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.ratingText}>{product.rating} / 5</Text>
        </View>
      </View>
    </View>
  );
};
