import React, {useState} from 'react';
import {View, Text} from 'react-native'
import AgoraUIKit from 'agora-rn-uikit';

const App = (props) => {
  const [videoCall, setVideoCall] = useState(true);
  React.useEffect(() => {
    if(!videoCall) {
      props.navigation.goBack()
    }
  }, [videoCall])
  const rtcProps = {
    appId: 'bb1ce266dfa14e02ba25ab30a524de9c',
    channel: '1-2',
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  ) : (
    null
  );
};

export default App;