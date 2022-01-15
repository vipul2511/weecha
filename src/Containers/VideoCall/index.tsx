import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {PropsInterface} from 'agora-rn-uikit';
import {
  MaxVideoView,
  MinVideoView,
  RtcConfigure,
} from 'agora-rn-uikit/Components';
import {MaxUidConsumer} from 'agora-rn-uikit/src/MaxUidContext';
import {MinUidConsumer} from 'agora-rn-uikit/src/MinUidContext';
import styles from 'agora-rn-uikit/src/Style';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props: PropsInterface = {
    rtcProps: {
      appId: 'bb1ce266dfa14e02ba25ab30a524de9c',
      channel: 'test',
    },
    callbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <View style={props.styleProps?.UIKitContainer}>
      <RtcConfigure>
        <MaxUidConsumer>
          {maxUsers =>
            maxUsers[0] ? (
              <MaxVideoView user={maxUsers[0]} key={maxUsers[0].uid} />
            ) : null
          }
        </MaxUidConsumer>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            ...styles.minContainer,
            width: '100%',
          }}>
          <MinUidConsumer>
            {minUsers =>
              minUsers.map(user => (
                <MinVideoView user={user} key={user.uid} showOverlay={true} />
              ))
            }
          </MinUidConsumer>
        </ScrollView>
      </RtcConfigure>
    </View>
  ) : null;
};
export default App;