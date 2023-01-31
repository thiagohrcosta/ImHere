import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View 
      style={styles.container}
    >
      <Text
        key="1"
        style={styles.eventName}
      >
        Nome do evento
      </Text>
      <Text
        key="2"
        style={styles.eventDate}
      >
        Quinta, 26 de janeiro de 2023
      </Text>
    </View>
    
  )
}
