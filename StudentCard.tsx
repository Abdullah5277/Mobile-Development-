

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import StudentCard from '../components/StudentCard';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Student Information</Text>

      <StudentCard
        name="Ali"
        rollNumber="BSCS-101"
        department="Computer Science"
      />

      <StudentCard
        name="Sara Ahmed"
        rollNumber="BSCS-102"
        department="Computer Science"
      />

      <StudentCard
        name="Ahmed"
        rollNumber="BSIT-103"
        department="Information Technology"
      />

    </ScrollView>
  );
}

// Screen styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 15,
    color: '#1565c0',
  },
});


