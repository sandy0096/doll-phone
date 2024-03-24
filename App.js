/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import { PhoneBodyStyle, PhoneButtonStyle, PhoneBodyOutlineStyle, PhoneButtonTextStyle, TitleTextStyle, PhoneButtonContainerStyle, SignContentStyle, PhoneDisplayStyle, CoverStyle } from './styles';
import { PhoneButton, PhoneBody, PhoneButtonContainer, PhoneDisplay, DisplayCover, TitleText } from './components';
import NumericData from './numeric-pad.json';
import { playAudio, stopAudio } from './Player';
import Tracks from './Player/tracks.json';
import BootSplash from "react-native-bootsplash";

const defaultTrack = {
  artwork: "https://img.freepik.com/free-vector/music-band-kids-cartoon_1308-126797.jpg?w=200",
  title: "No Track"
}

const App = () => {
  const [selectedTrack, setSelectedTrack] = React.useState(defaultTrack);
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  const onPlay = (id) => {
    setSelectedTrack(Tracks[id]);
    playAudio(id);
  }
  return (
    <PhoneBody bodyStyle={PhoneBodyStyle} bodyOutlineStyle={PhoneBodyOutlineStyle}>
      <PhoneDisplay bodyStyle={PhoneDisplayStyle}>
        <DisplayCover src={selectedTrack.artwork} coverStyle={CoverStyle}/>
        <TitleText content={selectedTrack.title} textStyle={TitleTextStyle} />
      </PhoneDisplay>
        {NumericData.map((btnGroup, it) =>
          <PhoneButtonContainer
            key={it}
            phoneButtonContainerStyle={PhoneButtonContainerStyle}>
              {btnGroup.map(btn =>
                <PhoneButton
                  key={btn.name}
                  signContent={btn.sign}
                  signContentStyle={SignContentStyle}
                  bodyStyle={PhoneButtonStyle}
                  content={btn.label}
                  onPressPlay={() => onPlay(btn.sound)}
                  textStyle={PhoneButtonTextStyle} />)}
          </PhoneButtonContainer>)}
    </PhoneBody>
  );
};

export default App;
