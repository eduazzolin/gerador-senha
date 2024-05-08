import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    flexBasis: '25%',
  },
  body: {
    width: '90%',
    gap: 6,
    justifyContent: 'flex-end',
    flex: 1,
  },
  firstRow: {
    flexDirection: 'row',
    gap: 6,
  },
  firstRow_b1: {
    flex: 1
  },
  firstRow_b2: {
    flexBasis: '40%'
  },
});
