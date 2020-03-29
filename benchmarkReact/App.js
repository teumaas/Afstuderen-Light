/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import * as Timing from './timing';
import {
  AppRegistry,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  timeout = 0;
  state: {
    time: string,
    time2: string,
    stopTimer: Boolean,
    elapsedTime: Number
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      time: 'Press button to calculate',
      time2: 'Press button to calculate',
    };
  }

  

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Button
            title="gaussLegendre"
            onPress={() => {
              console.log('Start');
              let startTime = Timing.now();
              for (let i = 0; i < numIters; i += 1) {
                gaussLegendre(10000000);
              }
              let endTime = Timing.now();
              console.log('Finish');
              let iterTime = (endTime - startTime) / numIters;
              console.log(iterTime);
              this.setState({time: iterTime.toString()});
            }}
          />
          <Text style={styles.textStyle}>{this.state.time}</Text>
          <Button
            title="getOneByPi"
            onPress={() => {
              console.log('Start');
              // this.toggleStopwatch();
              this.setState({stopTimer: false});
              createTime();
              // let startTime = Timing.now();
              for (let i = 0; i < numIters; i += 1) {
                getOneByPi(10000);
              }
              // let endTime = Timing.now();
              console.log('Finish');
              // clearInterval(interval);
              // let iterTime = (endTime - startTime) / numIters;
              // this.toggleStopwatch();
              // iterTime = this.stopwatch.getMsecs;
              console.log(time);
              stopTime();
              this.setState({time2: time, stopTimer: true});
            }}
          />
          <Text style={styles.textStyle}>{this.state.time2}</Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  start: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    textAlignVertical: 'center',
  },
  startTestButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  startTestText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    color: 'black',
  },
});

//AppRegistry.registerComponent('App', () => App);

//Pi calc

const numIters = 100;
var time = 0;
var timer = 0;

function createTime() {
  console.log('Function createTime()');
  console.log('first timer val: ' + timer);
  timer = setInterval(() => {
    console.log('Inside Timer');
    console.log('Timer val: ' + time);
    time++;
  }, 1);
}
function stopTime() {
  clearInterval(timer);
  console.log('STOP');
}

function gaussLegendre(iterations) {
  let a = 1.0;
  let b = 1.0 / Math.sqrt(2);
  let t = 1.0 / 4.0;
  let p = 1.0;
  for (let i = 0; i < iterations; i++) {
    let aNext = (a + b) / 2;
    let bNext = Math.sqrt(a * b);
    let tNext = t - p * Math.pow(a - aNext, 2);
    let pNext = 2 * p;
    a = aNext;
    b = bNext;
    t = tNext;
    p = pNext;
  }
  return Math.pow(a + b, 2) / (4 * t);
}

function getOneByPi(k) {
  let ak = 6.0 - 4 * Math.sqrt(2);
  let yk = Math.sqrt(2) - 1.0;
  var ak1;
  var yk1;
  for (let i = 0; i < k; i++) {
    yk1 =
      (1 - Math.pow(1 - yk * yk * yk * yk, 0.25)) /
      (1 + Math.pow(1 - yk * yk * yk * yk, 0.25));
    ak1 =
      ak * Math.pow(1 + yk1, 4) -
      Math.pow(2, 2 * i + 3) * yk1 * (1 + yk1 + yk1 * yk1);
    yk = yk1;
    ak = ak1;
  }
  return ak;
}
