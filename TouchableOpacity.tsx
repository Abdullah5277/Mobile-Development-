
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Level2() {
  const [balance, setBalance] = useState(0);

  // ONE handler for all three buttons
  const handleRecharge = (amount: number) => {
    setBalance(balance + amount);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.count}>Balance: Rs. {balance}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => handleRecharge(50)}>
          <Text style={styles.btnText}>Rs. 50</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => handleRecharge(100)}>
          <Text style={styles.btnText}>Rs. 100</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => handleRecharge(200)}>
          <Text style={styles.btnText}>Rs. 200</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { alignItems: "center", marginVertical: 20 },
  count: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  row: { flexDirection: "row", gap: 10 },
  btn: { backgroundColor: "green", padding: 12, borderRadius: 10 },
  btnText: { color: "white", fontSize: 16, fontWeight: "bold" },
});