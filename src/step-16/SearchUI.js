import React, { Component } from 'react'
import Highlight from 'react-syntax-highlight'
import Note from '../Note'

const imports = `import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native'`

const baseComponent = `class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  constructor(props){
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
       {/* Awesome Code Goes Here */}
      </View>
    )
  }
}
`

const IconRow = `render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={styles.row}> 
          <Image source={require('./assets/images/Beer.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Wine.png')} style={styles.mainIcon}/>
          <Image source={require('./assets/images/Martini.png')} style={styles.mainIcon}/>

          <Text style={styles.welcome}>Begin Your Adventure</Text>
        </View>
      </View>
    )
  }
`

const IconRowStyles = `const STANDARD_VERT_SPACING = 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_PURPLE,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  mainIcon: {
    height: 80,
    width: 80
  },
  welcome: {
    color: colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: STANDARD_VERT_SPACING
  }
})
`

const importMarker = `// App.js
import MapView, { Marker } from 'react-native-maps'`

const markerStyle = `// App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
})
// ...
`



const addState = `// App.js
class Map extends React.Component {
  constructor(props) { // heyo!
    super(props)
    this.state = {
      markers: [] // we will put markers into this Array
    }
  }
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 45.5209087,
              longitude: -122.6705107,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
        </MapView>
    </View>
    )
  }
}
`


const addMarkerMap = `// App.js
class Map extends React.Component {
  constructor(props) { // heyo!
    super(props)
    this.state = {
      markers: [] // heyo! we will put markers into this Array
    }
  }
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 45.5209087,
              longitude: -122.6705107,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          // heyo!
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker}>
                  <Text style={styles.text}>{marker.label}</Text>
                </View>
              </Marker>
            )
          }) : null}
          // end heyo!
        </MapView>
    </View>
    )
  }
}
`


const addMakrerHandler = `// App.js
class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: []
    }
    this.handlePress = this.handlePress.bind(this)
  }
  handlePress(e) { // heyo!
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          label: 'beer'
        }
      ]
    })
  }
  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
              latitude: 45.5209087,
              longitude: -122.6705107,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={this.handlePress} // heyo!
          >
          {this.state && this.state.markers.length > 0 ? this.state.markers.map((marker, i) => {
            return (
              <Marker {...marker} key={i}>
                <View style={styles.marker}>
                  <Text style={styles.text}>{marker.label}</Text>
                </View>
              </Marker>
            )
          }) : null}
        </MapView>
    </View>
    )
  }
}
`




class SearchUiView extends Component {
  render() {

    return (
      <div className="general">
        <h1>16. Search UI</h1>
        <p>In the next few steps we will be cleaning up some code from the last workshop, adding the components we need for our search screen, and adding the interactions and supporting routes for the map screen, and detail screen. Let's get started!</p>

        <h2>Components</h2>

        <ul className="setup__steps">
          <li>
            <p>Lets start by importing the necessary components for our search screen in 'main.js'</p>
            <Highlight lang='javascript' value={imports} />
          </li>
          <li>
            <p>Next, delete all of the JSX markup within the root view of the HomeScreen component. We will be replacing this with some awesom code in a second. The HomeScreen component should now look like this: </p>
            <Highlight lang='javascript' value={baseComponent} />
          </li>
        </ul>

        <h2>Icon Row</h2>
        <p>Now that we have a barebones component to work with, let's add in the a View, three Image components, and the supporting Text Component.</p>
        <ul className="setup__steps">
          <li>
            <p>Add a container style to our root view, a view for the icon row, and three image components for our icons.</p>
            <Highlight lang='javascript' value={IconRow} />
          </li>
          <li>
            <p>Finally, add the supporting styles to the stylesheet at the bottom of the page. We will apply background color and base styling to our wrapper, flex direction to the icon row, sizing for the icons, and some text formatting for the title text.</p>
            <Highlight lang='javascript' value={IconRowStyles} />

            <Note type="facts">
              <p><span>Note: </span>
               React Native uses flexbox for creating layouts. For more information on this see: <a href='https://facebook.github.io/react-native/docs/flexbox.html' target='blank'>Layout with Flexbox</a>
              </p>
            </Note>
          </li>
          <li>
            Awesome, at this point we should have a nice background for our app and a cool icon row with title text. Next, we will add in the search input and supporting routes for the other views.
            <Note type="facts">
              <p><span>Pro Tip: </span>
               As you build out your app, you will start to notice yourself duplicating styles in each of your components' StyleSheet objects. To help with this, create a shared style sheets for colors, text formatting, and anything else resuable. Then just import them in your components.
              </p>
            </Note>
          </li>
        </ul>

        <h2>Search Input &amp; Additional Routes</h2>
        <p>Now that we have our map, we can make it more interesting by adding the ability to add markers.</p>
        <ul className="setup__steps">
          <li>
            <p>First, import the Marker component.</p>
            <Highlight lang='javascript' value={importMarker} />
            <Note type="facts"><p><span>Note: </span> We are importing the `Marker` component using the named export syntax (hence the curlys).  You can learn more about modules <a href="https://strongloop.com/strongblog/an-introduction-to-javascript-es6-modules/">here.</a>
            </p></Note>
          </li>
          <li>
            <p>Update our stylesheet with marker and text styles.</p>
            <Highlight lang='javascript' value={markerStyle} />
          </li>
          <li>
            <p>Now we need a way to contain a set of markers.  We can use our component `state`.</p>
            <Highlight lang='javascript' value={addState} />
            <Note><p><span>Note:</span>  Learn more about React `state` in the official React Docs - <a href="https://facebook.github.io/react-native/docs/state.html">https://facebook.github.io/react-native/docs/state.html</a></p></Note>
          </li>

          <li>
            <p>Next, nested inside our `MapView` we can `iterate` over a set of markers with `this.state.markers` (we will populate it next step).</p>
            <Highlight lang='javascript' value={addMarkerMap} />
            <Note><p><span>What is happening:</span>  We use the JavaScript Array method `.map` on our this.state.markers Array, we pass it a function that takes in the argument of marker. We will then return the `Marker` component that was earlier imported, and spread our marker data onto the marker component.  This creates a list of nested marker components within our MapView.</p>
            </Note>
          </li>

          <li>
            <p>Now we can populate our this.state.markers Array and see markers render on the map.  To do this, we will add a handler to our MapView to capture and add a marker to our state when a user taps on the map. </p>
            <p>We first need to add our event handler `handlePress`, have it call this.setState to populate our Array.  Then we need pass the handler to our MapView component.</p>
            <Highlight lang='javascript' value={addMakrerHandler} />
          </li>

          <li>Bam!  You can now go nuts and tap on your map and see markers appear.</li>
        </ul>

        <h2>Reference Links</h2>
        <ul>
          <li><a href="https://github.com/airbnb/react-native-maps">react-native-maps</a></li>
        </ul>

      </div>
    )
  }
}

export default SearchUiView
