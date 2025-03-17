import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const SlideViews = ({ 
  view1, 
  view2, 
  animationTime = 0.5, 
  direction = "vertical", 
  showView1, 
  setShowView1 
}) => {
  const position = direction === "horizontal" ? screenWidth / 2 : screenHeight / 2;
  const [__showView1, set__ShowView1] = useState(showView1);
  const posOffset = useRef(new Animated.Value(position)).current;

  useEffect(() => {
    set__ShowView1(showView1);

    Animated.timing(posOffset, {
      toValue: showView1 ? position : -position,
      duration: animationTime * 1000,
      useNativeDriver: true,
    }).start(() => {
      set__ShowView1(showView1);
    });

  }, [showView1]);

  return (
    <View style={{ position: "relative", flex: 1 }}>
      {/* View1 */}
      {(__showView1 || showView1) && (
        <Animated.View
          style={{
            transform: [
              direction === "horizontal"
                ? { translateX: Animated.subtract(posOffset, position) }
                : { translateY: Animated.subtract(posOffset, position) },
            ],
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {view1}
        </Animated.View>
      )}

      {/* View2 */}
      {(!__showView1 || !showView1) && (
        <Animated.View
          style={{
            transform: [
              direction === "horizontal"
                ? { translateX: Animated.add(posOffset, position) }
                : { translateY: Animated.add(posOffset, position) },
            ],
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {view2}
        </Animated.View>
      )}
    </View>
  );
};

export default SlideViews;