import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../../shared/styles/colors';

const ContactModal = ({ contactModalOpen, setContactModalOpen }) => {
  return (
    <Modal
      visible={contactModalOpen}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>Shoot us an email</Text>
          <Text style={styles.email}>info@paradyse.app</Text>
          <TouchableOpacity onPress={() => setContactModalOpen(false)}>
            <Text style={styles.closeText}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ContactModal

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 45,
    alignItems: 'center',
    borderRadius: 10,
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  email: {
    marginBottom: 15,
    fontSize: 16
  },
  closeText: {
    fontWeight: '700',
    color: colors.main,
    fontSize: 15,
  },
});
