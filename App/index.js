// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View, ScrollView } from 'react-native';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextLetter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.letterBox}>
                    <Text style={styles.letterText}>{letters[currentIndex]}</Text>
                </View>
                <Button title="Next Letter" onPress={nextLetter} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    letterBox: {
        backgroundColor: '#fff',
        padding: 50,
        borderRadius: 25,
        marginBottom: 30,
        alignItems: 'center',
    },
    letterText: {
        fontSize: 100,
        fontWeight: 'bold',
        color: '#333',
    },
});