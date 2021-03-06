import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { connectTypingIndicator } from 'layer-react';

/**
 * This Component renders a list of names of people
 * who are currently typing in the Conversation.
 */
@connectTypingIndicator()
export default class TypingIndicator extends Component {

  getTypingText(users) {
    const userNames = users.map(user => user.displayName).join(', ');

    if (users.length == 1) {
      return userNames + ' is typing.'
    } else if (users.length > 1) {
      return userNames + ' are typing.'
    } else {
      return '';
    }
  }

  render() {
    const typingText = this.getTypingText(this.props.typing);

    return (
      <View style={styles.container}>
        <Text style={styles.typingText}>{typingText}</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
  },
  typingText: {
    margin: 5,
    marginLeft: 20,
    fontFamily: 'System',
    fontSize: 12,
    color: '#666'
  }
});
