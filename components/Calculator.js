import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Platform,  Alert } from 'react-native';
// import { Scene, Router, Actions, Stack } from 'react-native-router-flux';

class Calculator extends Component {

  state = { 
    historyArray: [],
    currentNumber: "",
    currentDecNum: "",
    nextNumber: "",
    nextDecNum: "",
    answer: "",
    timeAnswer: 0,
    minAnswer: 0,
    operator: null,
    timeCalculator: false,
    currentHour: "",
    currentMins: 0,
    nextHour: "",
    nextMins: 0,
    decimal: null,
    nextDecimal: null, 
  }

  clearAll = () => {
    this.setState({
      currentNumber: "",
      nextNumber: "",
      answer: "",
      operator: null,
      currentHour: "",
      currentMins: 0,
      nextHour: "",
      nextMins: 0,
      decimal: null,
      timeAnswer: 0,
      minAnswer: 0,
      nextDecimal: null,
      nextDecNum: "",
      currentDecNum: "", 
    })
  }

  resetValues = () => {
    this.setState({
      currentNumber: "",
      nextNumber: ""
    })
  }

  handelTimeCalculation = () => {
    // console.log(this.state.timeCalculator)
    this.setState({
      timeCalculator: this.state.timeCalculator ? false : true
    })
    this.clearAll()
    if(!this.state.timeCalculator){
      Alert.alert(
      `Time Calculation`,
      `Please convert your time to the following decimal format: 
      ${"\n"}5 Hours and 33 Minutes, would be 5.33`)
    }
  }

  handlePress = (type, value) => {
    if(type === "clear" && value === "CE"){
      return this.clearAll()
    }
    if(type === "operator"){
      this.setState({
        operator: value
      });
    }
    if(this.state.timeCalculator === false){

      if(type === "decimal" && this.state.decimal === null) {
        this.setState({
          decimal: '.'
        })
      }
      // console.log(this.state.currentNumber + "." + value)
    if(this.state.currentNumber === "" && this.state.operator === null && type === "number"){
      this.setState({
        currentNumber: value,
        currentDecNum: 1
      });
    } else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal === null) {
      this.setState({
        currentNumber: (this.state.currentNumber * 10) + value,
      })
    } else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === "") {
      this.setState({
        currentNumber: this.state.currentNumber + (value/10),
        currentDecNum: 1
      })
    } else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 1) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/10),
        currentDecNum: 2
      })
    }  else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 2) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/100),
        currentDecNum: 3
      })
    }   else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 3) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/1000),
        currentDecNum: 4
      })
    }   else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 4) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/10000),
        currentDecNum: 5
      })
    }   else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 5) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/100000),
        currentDecNum: 6
      })
    }   else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 6) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/1000000),
        currentDecNum: 7
      })
    }   else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 7) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/10000000),
        currentDecNum: 8
      })
    }  else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 8) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/100000000),
        currentDecNum: 9
      })
    } else if(this.state.currentNumber !== "" && this.state.operator === null && type === "number" && this.state.decimal !== null && this.state.currentDecNum === 9) {
      this.setState({
        currentNumber: this.state.currentNumber + (value/1000000000),
      })
    } 

    if(type === "decimal" && this.state.nextDecimal === null) {
      this.setState({
        nextDecimal: '.'
      })
    }

    if(type === "number" && this.state.operator !== null  && this.state.nextNumber === "") {
      this.setState({
        nextNumber: value
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === null && this.state.decimal === ".") {
      this.setState({
        nextNumber: (this.state.nextNumber * 10) + value,
        nextDecNum: 1
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextDecimal === "." && this.state.decimal === "." && this.state.nextDecNum === 1){
      this.setState({
        nextNumber: this.state.nextNumber + (value/10),
        nextDecNum: 2
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.decimal === "." && this.state.nextDecimal === "." && this.state.nextDecNum === 2) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/100),
        nextDecNum: 3
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === "." && this.state.nextDecNum === 2) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/1000),
        nextDecNum: 3
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === "." && this.state.nextDecNum === 3) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/10000),
        nextDecNum: 4
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === "." && this.state.nextDecNum === 4) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/100000),
        nextDecNum: 5
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === "." && this.state.nextDecNum === 5) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/1000000),
        nextDecNum: 6
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === "." && this.state.nextDecNum === 6) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/10000000),
        nextDecNum: 7
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === "." && this.state.nextDecNum === 7) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/100000000),
        nextDecNum: 8
      })
    } else if(type === "number" && this.state.operator !== null && this.state.nextNumber !== "" && this.state.nextDecimal === "." && this.state.nextDecNum === 8) {
      this.setState({
        nextNumber: this.state.nextNumber + (value/1000000000),
        nextDecNum: 9
      })
    }


  } else {
    if(this.state.currentHour === "" && this.state.currentMins === 0 && this.state.operator === null && type === "number" && this.state.decimal === null){
        this.setState({
          currentHour: (value * 60)
        })
    } else if(this.state.currentHour !== "" && this.state.currentMins === 0 && this.state.operator === null && type === "number" && this.state.decimal === null) {
      this.setState({
        currentHour: (this.state.currentHour * 10) + (value * 60)
      })
    }

    if(type === "decimal" && this.state.decimal === null) {
        this.setState({
          decimal: '.'
        })
    }

    if(type === "decimal" && this.state.decimal !== null) {
      this.setState({
        nextDecimal: '.'
      })
  }

    if(this.state.currentHour !== "" && this.state.operator === null && type === "number" && this.state.decimal === '.' && this.state.currentMins === 0) {
      this.setState({
        currentMins: value
      })
    }  else if(this.state.currentHour !== "" && this.state.currentMins !== 0 && type === "number" && this.state.decimal === '.' && this.state.nextMins === 0 && this.state.nextHour === "" && this.state.operator === null && ((this.state.currentMins * 10) + value) < 60) {
      this.setState({
        currentMins: (this.state.currentMins * 10) + value
      })
    }

    if(type === "number" && this.state.operator !== null  && this.state.nextHour === ""){
      this.setState({
        nextHour: (value * 60)
      })
    } else if(this.state.nextHour !== "" && this.state.nextMins === 0 && this.state.operator !== null && type === "number" && this.state.nextDecimal === null && this.state.decimal !== null) {
      this.setState({
        nextHour: (this.state.nextHour * 10) + (value * 60)
      })
    }


    if(this.state.nextHour !== "" && this.state.operator !== null && type === "number" && this.state.nextDecimal === '.' && this.state.nextMins === 0) {
      this.setState({
        nextMins: value
      })
    } else if(this.state.nextHour !== "" && this.state.nextMins !== 0 && this.state.operator !== null && type === "number" && this.state.nextDecimal === '.' && ((this.state.nextMins * 10) + value) < 60) {
      this.setState({
        nextMins: (this.state.nextMins * 10) + value
      })
    }

    // console.log(this.state.currentHour)
    // console.log(this.state.currentMins)
    // console.log(this.state.operator)
  }
    // console.log(this.state.currentNumber)
    // console.log(this.state.nextNumber)
    // console.log(this.state.answer)
    // console.log(this.state)
  
  }

  handelCalculate = (type, value) => {
    if(this.state.timeCalculator === false){
    if(this.state.operator !== null){
      if(this.state.operator === "+"){
        this.setState({
          answer: (this.state.currentNumber + this.state.nextNumber)
        })
      } else if (this.state.operator === "-"){
        this.setState({
          answer: (this.state.currentNumber - this.state.nextNumber)
        })
      } else if (this.state.operator === "x"){
        this.setState({
          answer: (this.state.currentNumber * this.state.nextNumber)
        })
      } else if (this.state.operator === "/"){
        this.setState({
          answer: (this.state.currentNumber / this.state.nextNumber)
        })
      }
    }
  } else if (this.state.timeCalculator === true){
    if(this.state.operator !== null){
      if(this.state.operator === "+"){
        this.setState({
          timeAnswer : ((this.state.currentHour + this.state.nextHour)/60),
          minAnswer: ((this.state.currentMins + this.state.nextMins) > 60 ? Math.round(((this.state.currentMins + this.state.nextMins)) - 60) : (this.state.currentMins + this.state.nextMins))
        })
        if((this.state.currentMins + this.state.nextMins) > 60) {
          this.setState({
            timeAnswer: ((this.state.currentHour + this.state.nextHour)/60) + 1
          })
        }
        // this.handleHistory()
      } else if (this.state.operator === "-"){
        this.setState({
          timeAnswer : ((this.state.currentHour - this.state.nextHour)/60),
          minAnswer: ((this.state.currentMins - this.state.nextMins) > 60 ? Math.round(((this.state.currentMins - this.state.nextMins) - 60)) : (this.state.currentMins - this.state.nextMins))
        })
        if((this.state.currentMins - this.state.nextMins) > 60) {
          this.setState({
            timeAnswer: ((this.state.currentHour - this.state.nextHour)/60) - 1
          })
        }
        // this.handleHistory()
      } else if (this.state.operator === "x"){
        this.setState({
          timeAnswer: "Unable to calculate"
        })
        // this.setState({
        //   answer: (this.state.currentNumber * this.state.nextNumber)/60
        // })
        // this.setState({
        //   timeAnswer : ((this.state.currentHour * this.state.nextHour)/60),
        //   minAnswer: ((this.state.currentMins * this.state.nextMins) > 60 ? Math.round(((this.state.currentMins * this.state.nextMins)) - 60) : (this.state.currentMins * this.state.nextMins))
        // })
        // if((this.state.currentMins * this.state.nextMins) > 60) {
        //   this.setState({
        //     timeAnswer: ((this.state.currentHour * this.state.nextHour)/60) + 1
        //   })
        //   console.log(this.state.timeAnswer)
        // }
      } else if (this.state.operator === "/"){
        this.setState({
          timeAnswer: "Unable to calculate"
        })
        // this.setState({
        //   answer: (this.state.currentNumber / this.state.nextNumber)/60
        // })
        // this.setState({
        //   timeAnswer : ((this.state.currentHour * this.state.nextHour)/60),
        //   minAnswer: ((this.state.currentMins * this.state.nextMins) > 60 ? Math.round(((this.state.currentMins * this.state.nextMins)) - 60) : (this.state.currentMins * this.state.nextMins))
        // })
        // if((this.state.currentMins * this.state.nextMins) > 60) {
        //   this.setState({
        //     timeAnswer: ((this.state.currentHour * this.state.nextHour)/60) + 1
        //   })
        //   console.log(this.state.timeAnswer)
        // }
      }
      this.handleHistory()
    }
  }
}

handleHistory = () => {
  if(this.state.timeCalculator === false){
    this.setState({
      historyArray: [...this.state.historyArray, ...[` ${this.state.currentNumber} ${this.state.operator} ${this.state.nextNumber}`]]
    })
  } else if(this.state.timeCalculator === true)  {
    this.setState({
      historyArray: [...this.state.historyArray, ...[` ${this.state.currentHour/60} hours ${this.state.currentMins} mins ${this.state.operator} ${this.state.nextHour/60} hours ${this.state.nextMins} mins`]]
    })
  }
}

  render() { 
    return ( 
      <View style={styles.calContainer}>
        {/* <View style={styles.timeCal}>
          <TextInput 

          title="Start Time"
          placeholder="Add Time, eg. 5 hours and 35 minutes"
          />
          { this.state.timeCalculator ? <Text>Please convert your time to the following decimal format: 5 Hours and 33 Minutes, would be 5.33</Text> : null}
        </View> */}
        <View style={styles.countContainer}>
          <View style={styles.calScreen}>
            { this.state.timeCalculator 
            ? 
            <Text style={styles.calScreenSmallText}>
              {this.state.currentHour/60} hours {this.state.decimal} {this.state.currentMins} mins {this.state.operator} {this.state.nextHour/60} hours {this.state.decimal} {this.state.nextMins} mins
            </Text>
            :
            <Text style={styles.calScreenSmallText}>
              {this.state.currentNumber} {this.state.operator} {this.state.nextNumber}
            </Text>
            }
            {
              this.state.timeCalculator
              ?
            <Text style={styles.calScreenText}>{ this.state.timeAnswer === "Unable to calculate" ? this.state.timeAnswer : `${parseInt(this.state.timeAnswer)} hours`} {  this.state.timeAnswer === "Unable to calculate" ? "" : `${(this.state.minAnswer)} mins`}</Text>
              :
              <Text style={styles.calScreenText}>{this.state.answer}</Text>
            }
          </View>
        </View>
        <View style={styles.calView}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 7)}
            >
              <Text style={styles.calText}>7</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 8)}
            >
              <Text style={styles.calText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 9)}
            >
              <Text style={styles.calText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 4)}
            >
              <Text style={styles.calText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 6)}
            >
              <Text style={styles.calText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 5)}
            >
              <Text style={styles.calText}>5</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 1)}
            >
              <Text style={styles.calText}>1</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 2)}
            >
              <Text style={styles.calText}>2</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress("number", 3)}
            >
              <Text style={styles.calText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.zero}
              onPress={() => this.handlePress("number", 0)}
            >
              <Text style={styles.calText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.operators}
              onPress={() => this.handlePress("operator", "/")}
            >
              <Text style={styles.calText}>/</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.operators}
              onPress={() => this.handlePress("decimal", ".")}
            >
              <Text style={styles.calText}>.</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.operators}
              onPress={() => this.handlePress("clear", "CE")}
            >
              <Text style={styles.calText}>CE</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.operators}
              onPress={() => this.handlePress("operator", "x")}
            >
              <Text style={styles.calText}>x</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.operators}
              onPress={() => this.handlePress("operator", "-")}
            >
              <Text style={styles.calText}>-</Text>
          </TouchableOpacity>
            <TouchableOpacity
              style={styles.operators}
              onPress={() => this.handlePress("operator", "+")}
            >
              <Text style={styles.calText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.equals}
              onPress={() => this.handelCalculate("equals", "=")}
            >
              <Text style={styles.calText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.timeCalButton}
              onPress={() => this.handelTimeCalculation()}
            >
              <Text style={styles.calText}>{this.state.timeCalculator ? "Time Calculator Off" : "Time Calculator On"}</Text>
          </TouchableOpacity>
          <View style={styles.historyView}>
          <Text style={styles.historyTitle}>History:</Text>
            <Text style={styles.history}>
            {/* <Text>{this.state.historyArray}</Text>
            {console.log(this.state.historyArray[0])} */}
            {
              this.state.historyArray !== []
              ?
              <Text style={styles.scrollView}>
                  1: <Text style={styles.historyBlocks}>{this.state.historyArray[0]}{"\n"}</Text>
                  2: <Text style={styles.historyBlocks}>{this.state.historyArray[1]}{"\n"}</Text>
                  3: <Text style={styles.historyBlocks}>{this.state.historyArray[2]}{"\n"}</Text>
                  4: <Text style={styles.historyBlocks}>{this.state.historyArray[3]}{"\n"}</Text>
                  5: <Text style={styles.historyBlocks}>{this.state.historyArray[4]}{"\n"}</Text>
                  {/* 6: <Text style={styles.historyBlocks}>{this.state.historyArray[5]}{"\n"}</Text>
                  7: <Text style={styles.historyBlocks}>{this.state.historyArray[6]}{"\n"}</Text>
                  8: <Text style={styles.historyBlocks}>{this.state.historyArray[7]}{"\n"}</Text>
                  9: <Text style={styles.historyBlocks}>{this.state.historyArray[8]}{"\n"}</Text>
                  10: <Text style={styles.historyBlocks}>{this.state.historyArray[9]}{"\n"}</Text> */}
              </Text>
              :
              null
              }
            </Text>
          </View>
        </View>
    </View> 

     );
  }
}
 
export default Calculator;

const styles = StyleSheet.create({
  history: {
    overflow: 'scroll',
    padding: 5,
  },
  scrollView: {
    overflow: 'scroll',
  },
  historyBlocks: {
    width: '100%',
  },
  historyTitle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  historyView: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 120,
    overflow: 'scroll',
    borderColor: '#dedede',
    borderWidth: 2,
    maxWidth: 420,
    width: 400,
  },
  calContainer: {
    margin: 0
  },
  timeCal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1,
    fontSize: 10,
    margin: 1,
  },
  calScreenSmallText: {
    fontSize: 20,
    padding: 10,
    alignItems: 'flex-end',
    color: '#ffffff',
    flexWrap: 'wrap',
  },
  calScreenText: {
    fontSize: 25,
    padding: 10,
    alignItems: 'flex-end',
    color: '#ffffff',
  },
  calScreen: {
    maxWidth: 420,
    width: Platform === "ios" ? 420 : 400,
    height: 100,
    backgroundColor: '#000',
    fontSize: 30,
    padding: 10,
    alignItems: 'flex-end',
    marginTop: 1,
    color: '#ffffff',
  },
  equals: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 4,
    width: 400,
    height: 50,
    backgroundColor: '#26A69A',
    color: '#ffffff',
  },
  timeCalButton: {
    alignItems: "center",
    backgroundColor: "#039BE5",
    padding: 10,
    margin: 4,
    width: 400,
    height: 50,
    backgroundColor: '#26A69A',
    color: '#ffffff',
  },
  zero: {
    alignItems: "center",
    backgroundColor: "#FB8C00",
    padding: 10,
    margin: 4,
    width: 400,
    height: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FB8C00",
    padding: 10,
    margin: 4,
    width: 128,
    height: 50,
    color: '#fff',
    borderColor: '#000',
  },
  operators: {
    alignItems: "center",
    backgroundColor: "#FF5722",
    padding: 10,
    margin: 4,
    width: 128,
    height: 50,
    color: '#fff',
    borderColor: '#000',
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  calView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  calText: {
    fontSize: 20,
  }
});