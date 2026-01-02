import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { INFO_POINTS } from '../constants/infoText';

export default function InfoSheet({ visible, onClose }) {
    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={styles.container}>
                <Text style={styles.title}>How to Track Movements</Text>
                {INFO_POINTS.map((point, index) => (
                    <Text key={index} style={styles.point}>• {point}</Text>
                ))}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: { justifyContent: 'flex-end', margin: 0 },
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },
    point: {
        fontSize: 14,
        marginBottom: 8,
    },
});
