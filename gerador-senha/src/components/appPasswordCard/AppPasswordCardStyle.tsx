import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 1,
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    width: '100%',
  },
  secoundRow: {
    flex: 1,
  },
  service: {
    fontSize: 25,
    flex: 1,
    fontWeight: 'bold'
  },
  password: {
    fontSize: 24
  },
  containerButtons: {
    width: 120,
    flexDirection: 'row'
    , gap: 4
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }



})