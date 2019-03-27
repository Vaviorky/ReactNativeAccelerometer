import React, {Component} from 'react';
import {Animated, Easing} from 'react-native';
import ModelView from 'react-native-gl-model-view';
import {accelerometer, setUpdateIntervalForType, SensorTypes} from "react-native-sensors";

const AnimatedModelView = Animated.createAnimatedComponent(ModelView);
setUpdateIntervalForType(SensorTypes.accelerometer, 100);

type Props = {};

export default class Model3D extends Component<Props> {
  static navigationOptions = {
    title: 'Model 3D - demo akcelerometru',
  };
  subscription = null;

  state = {
    accelerometerX: new Animated.Value(0),
    accelerometerY: new Animated.Value(0),
    accelerometerZ: new Animated.Value(0),
    zoom: new Animated.Value(-1),
    rotation: new Animated.Value(180)
  };

  constructor(props) {
    super(props);
    Object.keys(this.state).forEach(key =>
      this.state[key] instanceof Animated.Value &&
      this.state[key].__makeNative()
    );
  }

  componentDidMount(): void {
    this.subscription = accelerometer.subscribe(({x, y, z}) => {
        const {accelerometerX, accelerometerY} = this.state;

        Animated.timing(accelerometerX, {
            toValue: -x / 20, useNativeDriver: true, duration: 1
          }
        ).start();

        Animated.timing(accelerometerY, {
            toValue: z / 10, useNativeDriver: true, duration: 1
          }
        ).start();
      }
    );
  }

  componentWillUnmount(): void {
    this.subscription.unsubscribe();
  }

  render() {
    const {accelerometerX, accelerometerY} = this.state;
    const {navigation} = this.props;
    const {name, scale, zoom, rotate} = navigation.state.params;
    return (
      <AnimatedModelView
        animate
        model={`${name}.obj`}
        texture={`${name}.png`}
        rotateZ={180}
        rotateY={rotate}
        translateZ={zoom}
        translateX={accelerometerX}
        translateY={accelerometerY}
        scale={scale}
        style={{flex: 1}}
      />
    );
  }
}