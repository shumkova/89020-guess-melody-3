import Player from "../../components/audio-player/audio-player";
import withAudio from "../with-audio/with-audio";

const AudioPlayer = withAudio(Player);

const withActivePlayer = (Component) => {
  class WithAudioPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <AudioPlayer
              isPlaying={id === activePlayerId}
              onPlayButtonClick={() => this.setState({
                activePlayerId: activePlayerId === id ? -1 : id,
              })}
              src={src}
            />
          );
        }}
      />;
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withActivePlayer;
