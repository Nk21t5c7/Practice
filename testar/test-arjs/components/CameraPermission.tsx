import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { CameraView, Camera } from "expo-camera";

const CameraPermission: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    console.log("debug1");
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return <CameraView style={{ flex: 1 }} />;
};

export default CameraPermission;
