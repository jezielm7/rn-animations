import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312e38',
  },
  btnContainer: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6767d7',
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;